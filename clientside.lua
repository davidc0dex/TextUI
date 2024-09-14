function Alert(key, text) 
    SendNUIMessage({
        action = true,
        key = key,
        text = text
    })
end

function deleteAlert()
    SendNUIMessage({
        action = false
    })
end

exports('Show', Alert)
exports('Close', deleteAlert)