import { useQuery } from '@tanstack/react-query'
import axios from '../lib/axios'
function Forecast() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['weatherData'],
        queryFn: () => axios.get('weather?lon=108.2208&lat=16.0678&appid=42bcbd9bac7e04ea4a3d913dde6d368c&units=metric').then((res) => res.data),
    })

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    console.log(data)
    return (
        <div className="flex w-full flex-col bg-[#f4f4f6] p-3 text-black lg:p-[47px]">
            <div className="">{data.weather[0].main}</div>
            <div className="">{data.main.temp}</div>
            <div className="">{data.main.feels_like}</div>
            <div className="">{data.main.temp_min}</div>
            <div className="">{data.main.temp_max}</div>
        </div>
    )
}

export default Forecast
