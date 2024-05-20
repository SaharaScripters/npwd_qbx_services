local ServerConfig = require 'config.server'

--- @class Contact
--- @field src number @The source of the contact.
--- @field name string @The contact name.
--- @field phoneNumber string @The contact phone number.

--- @class ServiceJob
--- @field jobHash string @The job hash.
--- @field jobName string @The job name.
--- @field contacts table<Contact> @The contacts for the job.

--- @return table<ServiceJob>
local function getServices()
  local mappedServices = {}
  local players = exports.qbx_core:GetQBPlayers()
  for _, player in pairs(players) do
    local jobHash = player.PlayerData.job.name
    local jobName = player.PlayerData.job.label
    if ServerConfig.jobs[jobHash] then
      local jobContactsCount = mappedServices[jobHash] and #mappedServices[jobHash].contacts or 0
      local maxContactReached = jobContactsCount >= ServerConfig.jobs[jobHash].maxContacts
      local allowedContact = ServerConfig.jobs[jobHash].showOffDuty or player.PlayerData.job.onduty
      if not maxContactReached and allowedContact then
        local contact = {
          src = player.PlayerData.source,
          name = player.PlayerData.charinfo.firstname .. ' ' .. player.PlayerData.charinfo.lastname,
          phoneNumber = player.PlayerData.charinfo.phone
        }
        mappedServices[jobHash] = mappedServices[jobHash] or {
          jobHash = jobHash,
          jobName = jobName,
          contacts = {}
        }
        local contactsCount = #mappedServices[jobHash].contacts
        mappedServices[jobHash].contacts[contactsCount + 1] = contact
      end
    end
  end
  local services = {}
  for _, service in pairs(mappedServices) do
    services[#services + 1] = service
  end
  return services
end

lib.callback.register('npwd_qbx_services:callback:getservices', function(source)
  return getServices()
end)
