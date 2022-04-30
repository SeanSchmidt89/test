test1 = "the-stealth-warrior"
test2 = "The_Stealth_Warrior"


def to_camel_case(string):
    new_string = ""
    capital = False
    for letter in string:
        if letter != '_' and letter != '-':
            if capital == True:
                new_letter = letter.upper()
                new_string += new_letter
                capital = False
            else:
                new_string += letter
        elif letter == '_' or letter == '-':
            capital = True


                   


to_camel_case(test1)