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
  } from 'recharts';
  import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";


let Chart = (data) =>  {
        return(
            <Popup  maxWidth="1000" maxHeight="auto" >
            <div className="chart">    
            <br /><br />
            Температура °C
            <ComposedChart width={400} height={200} data={data.dats} margin={{
              top: 20, right: 0, left: 0, bottom: 20,
            }}>
              <CartesianGrid stroke='#f5f5f5' />
              <XAxis dataKey="DATS"/>
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="TA" name="Температура" fill='#f70000' stroke="#f56200" />
            </ComposedChart>
            </div>
            <div className="chart">
            <br /><br />
            Скорост на вятъра
            <ComposedChart width={400} height={200} data={data.dats} margin={{
              top: 20, right: 0, left: 0, bottom: 20,
            }}>
              <CartesianGrid stroke='#f5f5f5' />
              <XAxis dataKey="DATS" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='WS' name="Скорост на вятъра" barSize={8} fill='#4287f5' />
            </ComposedChart>
            </div>
            <div className="chart">
            <br /><br />
            Валеж
            <ComposedChart width={400} height={200} data={data.dats} margin={{
              top: 20, right: 0, left: 0, bottom: 20,
            }}>
              <CartesianGrid stroke='#f5f5f5' />
              <XAxis dataKey="DATS" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='RR' name="Дъждец" barSize={10} fill='#003cff' />
            </ComposedChart>
            </div>
            <div className="chart">
            <br /><br />
            Сняг
            <ComposedChart width={400} height={200} data={data.dats} margin={{
              top: 20, right: 0, left: 0, bottom: 20,
            }}>
              <CartesianGrid stroke='#f5f5f5' />
              <XAxis dataKey="DATS" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='SR' name="Снежец" barSize={10} fill='#5df5dc' />
            </ComposedChart>
            </div>

            <div className="chart">
            <br /><br />
            Относителна влажност %
            <ComposedChart width={400} height={200} data={data.dats} margin={{
              top: 20, right: 0, left: 0, bottom: 20,
            }}>
              <CartesianGrid stroke='#f5f5f5' />
              <XAxis dataKey="DATS" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type='monotone' dataKey='RH' name="Относителна влажност на въздуха" fill='#8884d8' stroke='#f56200' />
            </ComposedChart>
            </div>
            <div className="chart">
            <br /><br />
            Атмосферно налягане
            <ComposedChart width={400} height={200} data={data.dats} margin={{
              top: 20, right: 0, left: 0, bottom: 20,
            }}>
              <CartesianGrid stroke='#f5f5f5' />
              <XAxis dataKey="DATS" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type='monotone' dataKey='APRES' name="Атмосферно налягане" fill='#8884d8' stroke='#f56200' />
            </ComposedChart>
            </div>
            {data.index + 1} is for popup with lat: 
            {/* {data.index + 1} is for popup with lat: {data.lat} and lon {data.lng} */}
          </Popup>
        )
    }


export default Chart