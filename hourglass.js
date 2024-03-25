import java.util.Scanner;

public class StarPatternProgram
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);

        // Taking rows value from the user
        System.out.println("How many rows you want in this pattern?");
        int rows = sc.nextInt();
        System.out.println("Here is your pattern....!!!");

        // Printing upper half of the pattern
        for (int i = rows; i >= 1; i--)
        {
            // Printing leading spaces
            for (int j = 1; j <= rows - i; j++)
            {
                System.out.print(" ");
            }

            // Printing pattern
            for (int j = 1; j <= i; j++)
            {
                // Print '*' at the borders and for the first and last row
                if (j == 1 || j == i || i == rows)
                {
                    System.out.print("* ");
                }
                else
                {
                    System.out.print("  ");
                }
            }

            System.out.println();
        }

        // Printing lower half of the pattern
        for (int i = 2; i <= rows; i++)
        {
            // Printing leading spaces
            for (int j = 1; j <= rows - i; j++)
            {
                System.out.print(" ");
            }

            // Printing pattern
            for (int j = 1; j <= i; j++)
            {
                // Print '*' at the borders and for the first and last row
                if (j == 1 || j == i || i == rows)
                {
                    System.out.print("* ");
                }
                else
                {
                    System.out.print("  ");
                }
            }

            System.out.println();
        }

        // Closing the scanner object
        sc.close();
    }
}
