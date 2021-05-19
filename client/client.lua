RegisterNetEvent("gcPhone:receiveMessage")
AddEventHandler("gcPhone:receiveMessage", function(message)
	requestAllContact()
	if message.owner == 0 then
 
	  who = message.transmitter
	  
	  for _,contact in pairs(contacts) do
        if contact.number == message.transmitter then
          who = contact.display
          break
        end
      end
		SendNUIMessage({event = 'newmessage', message = message.message, who = who})
	end
end)



function requestAllContact()
  TriggerServerEvent('gcPhone:requestAllContact')
end

RegisterNetEvent("gcPhone:contactList")
AddEventHandler("gcPhone:contactList", function(_contacts)
 -- SendNUIMessage({event = 'updateContacts', contacts = _contacts})
 contacts = _contacts
end)
Citizen.CreateThread(function ()
	requestAllContact()
end)