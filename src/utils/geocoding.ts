export const geocode = async (address: string): Promise<{
    lat: number | string,
    lon: number | string,
}> => {
    const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
    const geoData = await geoRes.json();

    if(geoData.length === 0) {
        const lat = '';
        const lon = '';
        return {lat, lon};
    }

    const lat = parseFloat(geoData[0].lat);
    const lon = parseFloat(geoData[0].lon);

    return {lat, lon};
}