// FinancialForecast.java
public class FinancialForecast {

    // Recursive method to calculate future value
    public static double futureValue(double presentValue, double rate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return futureValue(presentValue, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) {
        double presentValue = 10000.0;  // Starting investment
        double growthRate = 0.05;       // 5% annual growth
        int years = 5;

        double result = futureValue(presentValue, growthRate, years);
        System.out.printf("Future value after %d years: ₹%.2f%n", years, result);
    }
}
