import subprocess
from rich.console import Console
import re

console = Console()

def main():
    try:
        console.print("Which file do you want to watch?", style="b")
        for index, command in enumerate(CommandParser.all_commands):
            console.print(index+1, end=' ')
            console.print(command.sass_file, end='', style="#81c784")
            console.print(" to ", end='')
            console.print(command.css_file, style="#ff8a65")
        console.print("Enter a choice: ", end='')
        choice = int(input()) - 1
        command = CommandParser.all_commands[choice]
        with console.status(f"Compiling {command.sass_file}. Press CTRL+C to quit\n"):
            command.run()
    except KeyboardInterrupt:
        console.print("\n[b]Bye[/]\n")

class CommandParser:
    all_commands: list = []
    def __init__(self, command:str):
        self.sass_file: str = re.findall("\/\w+.scss", command)[0][1:]
        self.css_file: str = re.findall("\/\w+.css",   command)[0][1:]
        self.command = command
        CommandParser.all_commands.append(self)

    def run(self):
        subprocess.run(self.command.split())

CommandParser("sass --watch styles/homepage.scss:styles/homepage.css")
CommandParser("sass --watch styles/index.scss:styles/index.css")

if __name__ == "__main__":
    main()

