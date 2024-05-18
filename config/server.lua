--- @class ServerConfig
--- @field jobs table<string, JobConfig> @The configuration for each job.

--- @class JobConfig
--- @field maxContacts number @The maximum number of contacts that can be displayed in the service menu.
--- @field showOffDuty boolean @Whether to show the off-duty contacts in the service menu.

--- @type ServerConfig
return {
  jobs = {
    mechanic = {
      maxContacts = 2,
      showOffDuty = false,
    },
    police = {
      maxContacts = 5,
      showOffDuty = true,
    },
  }
}
