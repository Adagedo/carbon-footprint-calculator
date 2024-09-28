import {
	Box,
	ChakraProvider,
	Image,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
} from "@chakra-ui/react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid ,AreaChart,Area} from "recharts";
const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
export default function PvHome() {
	return (
		<div className="dv">
			<ChakraProvider>
				<Box width={"full"} padding={10}>
					<Box
						bgImage={
							"/src/Home/private/Carbon_Footprint_Blog_Header-1024x476.jpg"
						}
						backgroundRepeat="no-repeat"
						className="Box"
						height={400}
						marginLeft={35}
					/>
					<Box display={"flex"} gap={10} margin={20}>
						<Card width={300}>
							<CardHeader>Header</CardHeader>
							<CardBody>Body</CardBody>
							<CardFooter>Footer</CardFooter>
						</Card>
						<Card width={300}>
							<CardHeader>Header</CardHeader>
							<CardBody>
								<Image src="..." width={"inherit"} />
							</CardBody>
							<CardFooter>Footer</CardFooter>
						</Card>
						<Card width={300}>
							<CardHeader>Header</CardHeader>
							<CardBody>Body</CardBody>
							<CardFooter>Footer</CardFooter>
						</Card>
					</Box>
				</Box>
			</ChakraProvider>
			<BarChart width={600} height={300} data={data}>
				<XAxis dataKey="name" stroke="#8884d8" />
				<YAxis />
				<Tooltip />
				<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
				<Bar dataKey="uv" fill="#8884d8" barSize={30} />
			</BarChart>
			<AreaChart
				width={730}
				height={250}
				data={data}
				margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
				<defs>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
					</linearGradient>
					<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
					</linearGradient>
				</defs>
				<XAxis dataKey="name" />
				<YAxis />
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip />
				<Area
					type="monotone"
					dataKey="uv"
					stroke="#8884d8"
					fillOpacity={1}
					fill="url(#colorUv)"
				/>
				<Area
					type="monotone"
					dataKey="pv"
					stroke="#82ca9d"
					fillOpacity={1}
					fill="url(#colorPv)"
				/>
			</AreaChart>
		</div>
	);
}
