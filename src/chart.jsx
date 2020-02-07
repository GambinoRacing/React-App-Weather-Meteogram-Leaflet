import React from 'react';
import {
    ComposedChart,
    Bar,
    Area,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LineChart,
    Label,
} from 'recharts';

import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import moment from 'moment'

moment.globalTimezone = 'Europe/Sofia';

let Chart = (data) => {
    return (
        <Popup maxWidth="1000" maxHeight="auto" >

            <div className="chart">
                <ComposedChart width={440} height={250} data={data.dats} margin={{
                    top: 20, right: 0, left: 0, bottom: 20,
                }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="DATS" tickFormatter={(unixTime) => moment(unixTime).format('DD.MM - HHч.')} />
                    <YAxis yAxisId="left" >
                    <Label value="Темп." dx={-15} />
                        </YAxis>
                    <YAxis yAxisId="right" orientation="right" >
                        <Label value="Сняг" dy={11} dx={13} />
                        <Label value="Дъжд" dy={25} dx={14} />
                    </YAxis>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='RR' yAxisId="right" name="Дъжд [mm]" barSize={6} fill='rgba(0, 60, 255, 0.6)' unit=" mm" animationDuration={0} isAnimationActive={false} />
                    <Bar dataKey='SR' yAxisId="right" name="Сняг [mm]" barSize={6} fill='rgba(93, 245, 220, 0.8)' unit=" mm" animationDuration={0} isAnimationActive={false} />
                    <Line dataKey='TA' yAxisId="left" name="Температура [°C]" type="monotone" stroke="rgba(235, 94, 52, 0.85)" activeDot={{ r: 5 }} unit=' °C' animationDuration={0} isAnimationActive={false} />
                </ComposedChart>
            </div>

            <div className="chart">
                <ComposedChart width={500} height={250} data={data.dats}
                    margin={{ top: 20, right: 0, left: 0, bottom: 20, }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="DATS" tickFormatter={(unixTime) => moment(unixTime).format('DD.MM - HHч.')} />
                    <YAxis yAxisId="left" domain={[80000, 110000]} />
                    <YAxis yAxisId="right" domain={[0, 100]} orientation="right" >
                        <Label value="RH" dx={5} />
                    </YAxis>
                    <YAxis yAxisId="rightWS" orientation="right">
                        <Label value="WS" dx={5} />
                    </YAxis>
                    <Tooltip />
                    <Legend />
                    <Area yAxisId="left" type="monotone" dataKey="APRES" fill="rgba(136, 132, 216, 0.5)" stroke="rgba(136, 132, 216, 0.9)" activeDot={{ r: 5 }} name="Атмосферно налягане [hPa]" unit=" hPa" animationDuration={0} isAnimationActive={false} />
                    <Bar dataKey='WS' yAxisId="rightWS" name="Скорост на вятъра [км/ч]" barSize={6} fill='rgba(148, 153, 255, 0.8)' unit=" км/ч" animationDuration={0} isAnimationActive={false} />
                    <Line yAxisId="right" type="monotone" dataKey="RH" stroke="#82ca9d" name="Относителна влажност [%]" unit=" %" animationDuration={0} isAnimationActive={false} />
                </ComposedChart>
            </div>

            {data.index + 1} is for popup with lat: {data.lat} and lng {data.lng}
            {/* {data.index + 1} is for popup with lat: {data.lat} and lon {data.lng} */}
        </Popup>
    )
}


export default Chart