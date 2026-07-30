"use client";
import React from "react";
import { Map, Placemark, YMaps, ZoomControl } from "@pbe/react-yandex-maps";

interface Props {
	className?: string;
}

export const YandexMap: React.FC<Props> = () => {
	return (
		<YMaps query={{ lang: "ru_RU" }}>
			<Map
				defaultState={{ center: [51.746061, 36.260452], zoom: 16 }}
				width={"100%"}
				height={"500px"}
				options={{ autoFitToViewport: "always" }}
			>
				<ZoomControl options={{ position: { right: 10, top: 50 } }} />
				<Placemark
					geometry={[51.746061, 36.260452]}
					options={{ iconColor: "red" }}
				/>
			</Map>
		</YMaps>
	);
};
