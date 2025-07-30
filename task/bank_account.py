# bank_account.py
class BankAccount:
    def __init__(self):
        self.balance = 0.0

    def deposit(self, amount: float):
        self.balance += amount
        print(f"Deposit Successful! Balance: {self.balance:.2f}")

    def withdraw(self, amount: float):
        if amount > self.balance:
            print("Insufficient balance.")
        else:
            self.balance -= amount
            print(f"Withdrawal Successful! Balance: {self.balance:.2f}")

    def view_balance(self):
        print(f"Current Balance: {self.balance:.2f}")

def main():
    account = BankAccount()
    menu = (
        "\n1. Deposit\n"
        "2. Withdraw\n"
        "3. View Balance\n"
        "4. Exit\n"
        "Choose an option: "
    )
    actions = {
        "1": account.deposit,
        "2": account.withdraw,
        "3": lambda x=None: account.view_balance(),
    }

    while True:
        choice = input(menu).strip()
        if choice == "4":
            print("Thank you for banking with us!")
            break
        elif choice in {"1", "2"}:
            try:
                amt = float(input("Enter amount: ").strip())
                if amt <= 0:
                    raise ValueError
                actions[choice](amt)
            except ValueError:
                print("Please enter a positive number.")
        elif choice == "3":
            actions[choice]()
        else:
            print("Invalid choice. Please select 1‑4.")

if __name__ == "__main__":
    main()
