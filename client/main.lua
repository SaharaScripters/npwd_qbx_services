RegisterNUICallback("getServices", function(_, cb)
  local services = lib.callback.await("npwd_qbx_services:callback:getservices", false)
  cb({ status = "ok", data = services })
end)

RegisterNUICallback("npwd:services:callPlayer", function(data, cb)
  exports.npwd:startPhoneCall(tostring(data.number))
  cb({})
end)