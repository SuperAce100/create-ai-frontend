import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type WeatherProps = {
  temperature: number;
  weather: string;
  location: string;
};

export const Weather = ({ temperature, weather, location }: WeatherProps) => {
  return (
    <Card className="bg-sky-500 shadow-lg text-white rounded-xl p-6 px-2 m-4 w-lg relative overflow-hidden">
      <CardContent className="space-y-2 flex flex-col items-start">
        <div className="text-2xl font-semibold tracking-tight flex items-center gap-2">
          {location}
        </div>
        <div className="text-8xl font-medium tracking-tight">{temperature}°C</div>
        <div className="text-lg opacity-90">{weather}</div>
        <div className="bg-amber-300 rounded-full p-2 absolute -top-10 -right-6 w-40 h-40 shadow-xl shadow-amber-300/50"></div>
      </CardContent>
    </Card>
  );
};
