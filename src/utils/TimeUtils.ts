export class TimeUtils {
    private static currentData: Date = new Date();

    public static getYear(): number {
        return this.currentData.getFullYear();
    }
}