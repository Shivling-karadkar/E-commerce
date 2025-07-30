# employee_salary.py
def calculate_salary():
    try:
        basic = float(input("Enter Basic Salary: ").strip())
        hra   = 0.20 * basic          # House Rent Allowance
        da    = 0.50 * basic          # Dearness Allowance
        gross = basic + hra + da
        tax   = 0.10 * gross
        net   = gross - tax

        print(f"\nGross Salary   = {gross:.2f}")
        print(f"Tax Deduction  = {tax:.2f}")
        print(f"Net Salary     = {net:.2f}")
    except ValueError:
        print("Please enter a valid numeric salary.")

if __name__ == "__main__":
    calculate_salary()

