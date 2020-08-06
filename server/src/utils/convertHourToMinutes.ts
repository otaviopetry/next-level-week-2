export default function convertHourToMinutes(time: string) {
    // Remove : from string and turn it into numbers
    const [hour, minutes] = time.split(':').map(Number);

    // Calculate how many minutes of the day since zero hour
    const timeInMinutes = (hour * 60) + minutes;

    return timeInMinutes;    
}