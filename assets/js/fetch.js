export const fetchData = async () => {
    try {
        const { fetchData, error} = await supabase
        .from ('cars')
        .select ('brand, year, mileage')
        if (error) {
            throw error;
        
        }
        return data;

    } catch (error) {
        console.error('Fetch Error', error);
    }
}

const data = fetchData()
console.log(fetchData)