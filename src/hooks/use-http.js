import { useState, useCallback } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
    const [url, setUrl] = useState("");

    const getData = useCallback(async (city, type) => {
        setIsLoading(true);
        setIsError(null);

        let cityUrl = city.toLowerCase().trim().split(" ").join("+");

        let url;

        if (type === "sun") {
            url = `http://api.wolframalpha.com/v2/query?appid=Y5WU9K-VWUX3WT5P8&input=${type}+${cityUrl}&includepodid=SunDayPlot:StarData&output=json`;
        }
        if (type === "moon") {
            url = `http://api.wolframalpha.com/v2/query?appid=Y5WU9K-VWUX3WT5P8&input=${type}+${cityUrl}&includepodid=MoonPathFromLocation&output=json`;
        }

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("connection error");
            }

            const data = await response.json();

            setIsLoading(false);
            setUrl(data.queryresult.pods[0].subpods[0].img.src);
        } catch (error) {
            setIsLoading(false);
            setIsError(error.message);
        }
        setIsLoading(false);
    }, []);

    return {
        getData,
        isLoading,
        isError,
        url,
    };
};

export default useHttp;
