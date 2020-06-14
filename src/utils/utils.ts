export const daysDeclination = ["день", "дня", "дней"]
export const hoursDeclination = ["час", "часа", "часов"]
export const minutesDeclination = ["минута", "минуты", "минут"]
export const secondsDeclination = ["секунда", "секунды", "секунд"]

export function declinationOfNumber(number: number, titles: string[]) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5]];
}