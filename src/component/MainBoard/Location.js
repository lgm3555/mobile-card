import React, { useEffect } from "react";
import './Location.scss';

const { kakao } = window;

const Location = () => {

    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);
    }, []);

    return (
        <div className="Location">
            <div id='myMap'></div>
        </div>
    );
};

export default Location;