export default class Http
{
    static fetch(url, params, method = 'POST' , timeout = 10000)
    {
        const fetchOption = {
            method: method,
            body: JSON.stringify(params),
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
        };

        return new Promise(function (resolve, reject)
        {

            const timeoutId = setTimeout(() =>
            {
                reject();
            }, timeout);

            fetch(url, fetchOption)
                .then(response =>
                {
                    if (response.status === 200)
                        return response.json();
                    else
                    {
                        console.log(response.json());
                        reject('RESPONSE_FAIL')
                    }
                })
                .then(async (response) =>
                {
                    clearTimeout(timeoutId);
                    resolve(response);
                })
                .catch((e) =>
                {
                    console.log(e);
                    clearTimeout(timeoutId);
                    reject(e);
                });
        });

    }

    static get(url , params , timeout = 10000)
    {
        return Http.fetch(url , params , 'GET', timeout);
    }

    static post(url , params , timeout = 10000)
    {
        return Http.fetch(url , params , 'POST', timeout);
    }

}