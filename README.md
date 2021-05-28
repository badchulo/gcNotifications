# gcNotifications
 Notifications for gcPhone
 
 gcPhone server.lua must have this Event (Mine haven't so i write it)
 
```
RegisterServerEvent('gcPhone:requestAllContact')
RegisterServerEvent('gcPhone:requestAllContact')
AddEventHandler('gcPhone:requestAllContact', function()
    local sourcePlayer = tonumber(source)
    xplayer = ESX.GetPlayerFromId(source)
	if xPlayer ~= nil then
		identifier = xplayer.identifier
		notifyContactChange(sourcePlayer, identifier)
	end
end)

```
