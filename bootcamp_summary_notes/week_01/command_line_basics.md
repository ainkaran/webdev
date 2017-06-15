# Command Line Summary
Here are a list of commands that are most common in the day to day use of web development.
```shell
pwd
```
Is used to show the current path you're in.
```shell
whoami
```
This shows you your user's name.
```shell
ls
```
This lists all files and folders in your current location.
```shell
ls -lha
```
You can pass in options to ls for better display. In the example above, `a` shows all hidden files and folders (ones that start with a .). `l` uses a long listing format (will show more info about each entry and `h` prints sizes in human readable format (e.g., 1K 234M 2G).
```shell
cd /etc
```
This will change the current directory to the path given.
```shell
cd ..
```
This will navigate up one directory.
```shell
cd ~
```
This navigates to your user's home directory.
```
mkdir some_dir
```
This will create a directory called `some_dir` in your current location.
```
mkdir -p some/long/path
```
This will create all necessary parent directory until getting to the last one. In the example above if directory `some` and `long` don't exist it will create them before create `path` directory.
```
cat some_file.rb
```
This will display the content of the `some_file.rb` file in your terminal.
```
less some_file.rb
```
This will display the content of the `some_file.rb` in an interactive fashion so you can scroll up and down using the up and down arrows. This is useful for large files.
```shell
touch abc.txt
```
This will create an empty file `abc.txt` in your current directory. If the file exists it will set the modified date/time on it to current date/time.
```
tail README.md
```
This will display the end of the `README.md` file.
```
tail -f README.md
```
This will display the end of the `README.md` file and keep listening for any more lines that are added and display them right away. This is good to use with files that has things being added to it such as log files. To exit from the command you can press `ctrl+c`.
```
grep abc README.md
```
This will search the content of `README.md` for the string `abc`
```
grep -ni --color abc README.md
```
This will search the content of `README.md` for the string `abc` showing the line number, ignoring the case and displaying the matched strings in color.
```
find . -name abc.txt
```
This will search the current folder (and all nested folders and subfolders) for a file named `abc.txt`.
```
man ls
```
This will show the manual page for the `ls` command. It's useful to see what options a command has.
```
top
```
This shows the currently running processes with their memory and cpu usage. It's good to see if you have a process is consuming a lot of cpu or memory resources. It's similarly to Activity Monitor display in Mac. To exit from it hit the `q` key.
```
clear
```
This will clear the screen by making the current line the first top line in the terminal window. You can still scroll up to view previous commands and print outs.
```
cp 1.txt 2.txt
```
This will copy a file `1.txt` to a new file `2.txt`
```
cp -r dir1 dir2
```
This will copy dir `dir1` and all of its files, directories and subdirectories to a new directory `dir2`.
```
mv file1.txt ../file1.txt
```
This will move `file1.txt` up one directory (to the parent directory).
```
mv file1.txt file2.txt
```
This will move `file1.txt` to `file2.txt` within the same directory. This technically renames the `file1.txt` to `file2.txt`
```
ps
```
This displays your process state. It will display all the terminal processes currently running.
```
ps aux
```
This displays all the processes by user in addition to the terminal processes themselves. It's useful to see all the processes running in your system.
```
ps aux | grep abc
```
You can use a pipe `|` to send the output of one command to another command. In this case we are sending the output of the `ps aux` which displays all the processes currently running (generally a long list) to the `grep abc` command which filters the lines to the ones containing the string `abc`. This way we only display the running processes with string `abc` in their name / path.
```
kill 4544
```
After you run the `ps` command, you will notice that each process has a unique `PID`. You can use this `PID` to kill a specific process using the `kill` command.
```
kill -9 4544
```
This will send a `kill` command with `-9` signal which will force stop a process. The default signal is `-15` which send a message to the process itself to stop. The `-15` may not kill the process if the process is stuck or not responding but it's certainly the more graceful way to stop a process and it's best to try with that first before trying with the `-9` option.
```
sudo mkdir /abc
```
You can use the `sudo` to run a command as a `root` user which is the main admin user. This is needed if you're creating files or folders outside of your user's main folder. The command will prompt you to enter a password, note that the password will not be shows and no stars will shown either, you just have to hit enter at the end of it.
```
chmod +x file_name
```
This will make the file `file_name` executable so you can execute it as a shell script.
```
chmod 777 file_name
```
This will change the permissions to the file to be writable / readable / executable by everyone.
```
chown file.txt tammam
```
This will change the ownership of the file `file.txt` to user `tammam`.
```
env
```
This displays a list of all the environment variable in you system.
```
export abc=123
```
This sets an environment variable named `abc` with a value `123`
```
echo $abc
```
This display the value of the environment variable `abc`
```
echo "Hello World"
```
This will display `Hello World` on the terminal.
```
nano file.txt
```
This opens up a simple text editor in the terminal window to edit the file. It shows command to exit, save, search..etc at the bottom of the terminal window.
```
nano ~/.bash_profile
```
This will enable you to edit the `~/.bash_profile` file which contains command that are run whenever a new terminal tab or window are opened. You can try adding `echo 'Hello Awesome'` to the top of the file. This will print `Hello Awesome` every time you open a terminal tab or window. You can also set `PS1` environment variable which changes the display before the cursor before every line.
```
ssh root@my_domain.com
```
This will log you in to a remote server so you can run commands on a remote server as if you running them on your own computer. You will be asked for a password unless you setup the server to accept connection based on your ssh public key.
```
ssh-keygen -t rsa -b 4096 -C "email@example.com"
```
This will generate an SSH public/private rsa key pair. The default location for it is `~/.ssh/id_rsa` which you can change as it prompts you for instructions afterward.
