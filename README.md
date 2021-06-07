# Password Generator

## Description

This project is a random password generator that creates a password based upon specifications determined by user responses to prompts.

The password size must be between **8** and **128** characters, and if no response is provided, or if the response is outside of that range, it displays an **<span style="color: red">alert</span>** displaying the requirements and returns the user to the number of characters prompt.

The user can also **cancel** the application at the number of characters prompt, which stops any further prompts.

Once a valid number is entered, it then requires that the user select **at least one of four types of characters** to be included in the password. These options are: lowercase letters, uppercase letters, numbers, and/or special characters. Not selecting any will display an **<span style="color: red">alert</span>** and return the user to the character type prompts.

Once valid selections have been made, the app returns a password consisting of the user specified number of random characters from all of the options selected.

The app can be run multiple times *without refreshing the page*, and will replace the prior displayed password with the new one that is generated.

## Page Link
The project can be viewed at <https://tharveyster.github.io/password_generator/>.

## Screenshot

![The Password Generator application displays a red button to "Generate Password".](./assets/images/password-generator-screenshot.png)