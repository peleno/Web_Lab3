const BASE_URL = "http://localhost:8080";
const RESOURSE_URL = `${BASE_URL}/lamps`;

const base_request = ({ urlPath = "", method = "GET", body = null }) => {
    try {
        const requestParams = {
            method,
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        };

        if (body) {
            requestParams.body = JSON.stringify(body);
        }
        return fetch(`${RESOURSE_URL}${urlPath}`, requestParams);
    } catch (error) {
        console.log("HTTP ERROR: ", error);
    }
};

export const getAllLamps = async () => {
    const response = await base_request({});
    return await response.json();
};

export const getLampById = async (id) => {
    const response = await base_request({ urlPath: `/${id}` });
    return await response.json();
};

export const createLamp = async (body) =>
    base_request({ method: "POST", body });

export const deleteLamp = async (id) =>
    base_request({ urlPath: `/${id}`, method: "DELETE" });

export const updateLamp = async (id, body) =>
    base_request({ urlPath: `/${id}`, method: "PUT", body });
