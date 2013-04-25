function pixelToGeo(x, y) {
    var res = {};
    x /= size;
    y /= size;
    res[LAT] = y <= 0  ? 90 : y >= 1 ? -90 : RAD * (2 * atan(exp(PI * (1 - 2 * y))) - HALF_PI),
    res[LON] = (x === 1 ?  1 : (x % 1 + 1) % 1) * 360 - 180;
    return res;
}

function geoToPixel(lat, lon) {
    var latitude  = min(1, max(0, 0.5 - (log(tan(QUARTER_PI + HALF_PI * lat / 180)) / PI) / 2)),
        longitude = lon / 360 + 0.5;
    return {
        x: longitude*size <<0,
        y: latitude *size <<0
    };
}

function template(str, data) {
    return str.replace(/\{ *([\w_]+) *\}/g, function (x, key) {
        return data[key];
    });
}

function fromRange(sVal, sMin, sMax, dMin, dMax) {
    sVal = min(max(sVal, sMin), sMax);
    var rel = (sVal - sMin) / (sMax - sMin),
        range = dMax - dMin;
    return min(max(dMin + rel * range, dMin), dMax);
}
