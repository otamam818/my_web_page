# Purpose: to move the entire src directory's .js files into typescript
import os
from pathlib import Path
from typing import Final
from distutils.file_util import copy_file

SOURCE_ROOT: Final[str] = "./src"
DESTINATION_ROOT: Final[str] = "./src_ts"
BINARY_FILE_EXTENSIONS: Final[list[str]] = [
    "png",
    "woff2",
    "jpeg",
    "webp"
]

def main():
    fix_dirs(SOURCE_ROOT)

def fix_dirs(parent_path: str):
    """ Parses the directory to restructure it for the .ts layout """
    new_parent_path: str
    if parent_path.startswith(SOURCE_ROOT):
        new_parent_path = f"{DESTINATION_ROOT}/{'/'.join(parent_path.split('/')[2:])}"
    else:
        new_parent_path = parent_path

    for item in os.listdir(parent_path):
        potential_file = f"{parent_path}/{item}"

        if os.path.isfile(potential_file):
            copy_to_new_dir(item, parent_path, new_parent_path)

        elif os.path.isdir(potential_file):
            # We want to remove the "./src" from the top and simply replace it with
            # "./src_ts"
            create_dir(f"{new_parent_path}/{item}")
            fix_dirs(potential_file)

def copy_to_new_dir(item_name: str, parent_path: str, new_parent_path):
    """ Writes the original data to the new file """
    original_data: str

    for extension in BINARY_FILE_EXTENSIONS:
        if item_name.endswith(extension):
            # do a simple `cp` operation
            copy_file(
                f"{parent_path}/{item_name}", # from
                f"{new_parent_path}/{item_name}" # to 
            )
            return

    with open(f"{parent_path}/{item_name}", 'r') as opened_file:
        try:
            original_data = opened_file.read()
        except:
            raise RuntimeError("Cannot read " + f"{parent_path}/{item_name}")

    # .jsx files get transformed to .tsx 
    if (item_name.endswith('.jsx')):
        item_name = item_name.split('.')[0] + ".tsx"

    with open(f"{new_parent_path}/{item_name}", 'w') as opened_file:
        opened_file.write(original_data)

def create_dir(new_parent_path: str):
    if not(Path(new_parent_path).exists()):
        Path(new_parent_path).mkdir()

if __name__ == "__main__":
    main()
