---
title: 1-Prerequisites
---

The Prerequisites for learning ROS in my opinion (sorted from highest priority):

## 1.1-Python Programing Language 1:

C++ is generally considered more important, and it might have more resources than python but in your
master program you will not need to use C++ in COE 510 (ROS course) since it will be optional. You will
not be required to use C++ in the rest of the courses instead you will need python (and MATLAB in some
courses). Also, if you want to use AI in your project, python is the most preferred language due to its
powerful libraries. So, understanding python will be very helpful for you in COE 510 and other courses as
well.

The best App I know for learning a programing Language in general is SoloLearn and the topics in it for
learning python were very helpful. Note that there is also a website for this app but from my experience the
app is more convenient to use than the website.
The best website for learning Computer Science topics in general including programing is
https://www.tutorialspoint.com/tutorialslibrary.htm #It is helpful!!

Also here are the best YouTube Channels who are specialized in python:  
https://www.youtube.com/c/Coreyms  
https://www.youtube.com/c/NeuralNine  
https://www.youtube.com/c/TechWithTim  
https://www.youtube.com/c/realpython  
I might have missed few, but these are the main channels that I usually learn from, and they are extremely
helpfully.

## 1.2-Linux:

### 1.2.1-Installing Linux (Ubuntu Distribution):

A-VirtualBox (Recommended Option):  
Here are the links for installing Ubuntu using VirtualBox:  
If you use Fixed Size instead of Dynamically allocated during the installation, you should get better
performance. This is not included in the links, and I did not notice a big difference in speed when I used
fixed size (maybe I have done it wrong).
Installing Ubuntu Linux using VirtualBox:  
https://www.youtube.com/watch?v=KV9jhyibHL4  
or  
https://www.youtube.com/watch?v=sB_5fqiysi4  
B-Dual Boot (Second Option):  
Linux will work much faster if we install it using a Dual Boot instead of a virtual machine. You just need
to be careful if you want to install Ubuntu via Dual Boot since it is not as safe as VirtualBox. Also, if you
want to remove Ubuntu be careful and make sure you remove it correctly.
Here are the links for installing Ubuntu using Dual Boot (back up your data just in case):  
https://www.youtube.com/watch?v=-iSAyiicyQYor  
or  
https://www.youtube.com/watch?v=aKKdiqVHNqw  
C-WSL (Third Option):  
Also, now you can use WSL (Windows Subsystem for Linux)  
https://www.youtube.com/watch?v=_fntjriRe48  
if you have used WSL before then most probably you will face some issues if you then use VirtualBox.
D-Windows Reset:
If for some reason VirtualBox is not working (one reason is from using WSL) and you did not know how
to solve it, then one of the guaranteed ways to solve your issues in VirtualBox is by resetting windows.
Note that this is an extreme way and will take you few hours. This method solves almost any issue related
to Windows configurations.
How to Reset Window (Make Sure to Keep Your Files):
https://www.youtube.com/watch?v=rCeyG1OsatQ  
or  
https://www.youtube.com/watch?v=hAbx6Ct9lz  
or  
https://www.youtube.com/watch?v=zDxV2gium5Y  
or  
https://www.youtube.com/watch?v=XQCQlT3Dz1s  

### 1.2.2-After Installing Ubuntu:

This is one of the most important parts in the whole summary. If you are using VirtualBox then there are
some very important things you need to do immediately after installing Ubuntu in order to not face certain
issues in the future. Note that some steps are still relevant and important even if you did not install Ubuntu
using VirtualBox. Also, not all steps are strictly in order and some of them are not important such as G or
H (they are only my personal preference).  
Note: A, C, D, and L are used if you are using VirtualBox. If you are not using VirtualBox don't worry
because you will not need them.  
A-Add Guest Additions (VirtualBox):  
[open VirtualBox then run Ubuntu then go to Devices > Insert Guest Additions CD image... then restart
ubuntu to see the effect] #This will solve some issues such as your screen scale.
B-Software Updater:  
[Run Software Updater Program in Ubuntu and click Install Now after it has checked for updates] #It is
one of the default programs in Ubuntu. Note that in the first time it will take some time to update. This part
is not that important.  
C-Add Extension Package (VirtualBox):  
[open VirtualBox then go to File > Preferences > Extensions then add the extension package (download
the extension package from VirtualBox website)]  
How to add Extension Package:  
https://www.youtube.com/watch?v=BmY0a9PSZgs  
or  
https://www.youtube.com/watch?v=mwKmxxRbvws  
D-Connect the Camera to the Virtual Machine (VirtualBox):  
[open VirtualBox (Ubuntu should not be running) select your operating system > got to Settings > USB >
check USB 3.0 (xHCI) Controller > add your camera] #if you run Ubuntu, you should see your camera in
[Run Ubuntu > Devices > Webcams > your camera name]  
Also, just in case [go to Devices > USB > then choose your camera name]  
If part D worked correctly, you could use your camera from VirtualBox by using Cheese program (it is a
default program in Ubuntu, so you do not need to install it). Note that the steps for adding another USB
device to VirtualBox are almost the same.  

E-Commands in the Terminal for Ubuntu:  
sudo apt-get install ubuntu-restricted-extras #this command will enable you to open video files and add
other functionality to Ubuntu. there are some legal reasons for not having these functionalities after
installing Ubuntu.
sudo apt install gnome-tweaks #you could change your theme in ubuntu from this tool. This command is
not that important.  
F-Install OpenCV:  
sudo apt-get update  
sudo apt-get upgrade  
sudo apt-get install libopencv-*  
sudo apt install python3-pip  
In Windows you only need these two lines (use pip instead)
pip3 install opencv-python #this is the main library  
pip3 install opencv-contrib-python #some functionalities of OpenCV will not work if you don't install this
package  
G-Install Terminator, Git, Visual Studio Code, and Chrome:  
-Terminator Terminal:  
sudo apt-get install terminator #this terminal is better than the one in ubuntu and it is especially useful in
opening multiple terminals at the same time (this will be very handy when we use ROS).  
-Git:  
sudo apt-get install git  
-Google Chrome:  
sudo apt update  
sudo apt upgrade
wget --version

sudo apt install wget #if wget is not installed (the previous command did not work)
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb #the link might not be
the same in the future but make sure you download the .deb file
sudo dpkg -i google-chrome-stable_current_amd64.deb #in general sudo dpkg -i [file name].deb
-Visual Studio Code (VS Code):
you can download VS Code if you go to [Ubuntu Software program > Development > choose code] #you
may not see anything and wait for a while or you may need to [click on a button with three dots and you
might wait for few seconds > choose code]
H-VS Code Extensions:  
if you installed VS Code then I recommend installing these extensions because they are very helpful.
Extensions:  
-Python #obviously you must have this extension. if you add a .py file vs code will automatically suggest
the extensions you need, and this will be one of them.  
-Pylance  
-Prettier - Code formatter
-Visual Studio IntelliCode  
-Bracket Pair Colorizer  
-Code Spell Checker  
-Kite #very usefully for auto complete.  
I-Install Noetic (ROS):  
http://wiki.ros.org/noetic/Installation/Ubuntu #Noetic will work with Ubuntu 20.04
J-Create a Workspace (ROS):  
[Write in the Terminal]:  
echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc #you should have done this step in the installation
part. if you did not then use this command.
mkdir -p ~/catkin_ws/src #in general the command looks like this mkdir -p [ your workspace folder. you
could put any name and path you like here]/src #I will stick with ~/catkin_ws/ to avoid any confusions
cd ~/catkin_ws/  


source /opt/ros/noetic/setup.bash #if you still did not close the terminal.
catkin_make
The below step is important so that you will not always need to source your workspace in the terminal (it
will make your life easier ):  
echo "source ~/catkin_ws/devel/setup.bash" >> ~/.bashrc #[or add source /opt/ros/noetic/setup.bash
manually in your .bashrc file]. [.bashrc file is in your home directory (in ~). If you do not see it, press Ctrl+ h to show the hidden files]
K-All Noetic packages for COE 510 (ROS):  
The below command will install all the necessary ROS packages for the whole course for 2021 (there might
be more packages used in the future):  
[Write in the Terminal]:  
sudo apt-get install ros-noetic-ros-tutorials ros-noetic-rqt ros-noetic-rqt-common-plugins ros-noeticturtlesim ros-noetic-vision-opencv ros-noetic-usb-cam ros-noetic-openni2-* ros-noetic-navigation rosnoetic-slam-gmapping ros-noetic-tf2-tools ros-noetic-geographic-msgs #If you copy and immediately past
this command, it will not work because you will also be copying the Enter key. So, make sure you put it all
in one line in a .txt file for an example then past it in the terminal.
L-Add a Snapshot (VirtualBox):  
After you have installed ROS and made the basic configurations that suits you then do not forget to use a
snapshot. This is very important. I recommend that you have at least two snapshots one after immediately
installing ROS (or after finishing section 1.2.2), and the other is after you have completed a long and
important configurations or cods in ROS.
Making a Snapshot in VirtualBox:  
https://www.youtube.com/watch?v=Qte4X-rdr2Q  
you can change the path of your snapshot folder by:  
[open VirtualBox > Settings > Advanced > Snapshot Folder. then you can change the path]  



### 1.2.3-Linux Terminal:

https://www.youtube.com/watch?v=YHFzr-akOas&list=PLS1QulWo1RIb9WVQGJ_vh-RQusbZgO_As  
or  
https://www.youtube.com/watch?v=wBp0Rb-ZJak  
or  
https://www.youtube.com/watch?v=ZtqBQ68cfJc  



### 1.2.4-File System/Structure:
https://www.youtube.com/watch?v=42iQKuQodW4  
or  
https://www.youtube.com/watch?v=Hbg  


### 1.2.5-Programs in Linux:

https://www.youtube.com/watch?v=9HuExVD56Bo  
#YouTube link summary (some details are not included in the video link such as Tar file):  
The below three files are independent (AppImage, Snap, and Flatpak) which means that they generally do
not need dependencies libraries.
A-AppImage:  
[Program Name].AppIamge file#This is the most independent file but takes a lot of space.
B-Snap:  
[Program Name].snap file #only used in Ubuntu and could be downloaded from https://snapcraft.io/ or you
could use Ubuntu Software.
C-Flatpak:  
[Program Name].flatpak file #could be downloaded from https://flatpak.org/
D-Tar File:  
Close to .exe file in windows but not the same:  
https://www.youtube.com/watch?v=njqib0fzE9c  
https://www.youtube.com/watch?v=IBv_I8VUnIA  

https://www.youtube.com/watch?v=KKbGGbczheI  
tar -xvzf [or xvfj] [file Name].[an extension which is usually starts with tar then sometimes . and gz]  
then sudo source [then name of the file]  
E-Debian Package or RPM:  
write sudo dpkg -i [file name].deb #for debian based distributions such as Ubuntu use dpkg for redhat based
distributions we use rpm. I installed Chrome and vscode using this method.
F-Advanced Package Tool (apt):  
The apt command should be familiar to you if you have briefly used Linux (note that this is related to dpkg
or rpm). Also, apt-get and aptitude are used for installing a program. Moreover, in general there are some
related commands which starts with apt then – then a word such as apt-cache or apt-get.  
https://www.youtube.com/watch?v=RC7bvzIqxS8  
apt main commands:  
sudo apt[or apt-get] install [program name] #to install a program  
sudo apt remove [program name] #to uninstall a program  
sudo apt search [program name] #you could search for a ROS package by writing sudo apt search ros-noetic  
#most packages related to ros starts with ros- then the distribution name  
sudo apt purge [program name] #to completely uninstall a program  
sudo apt update [program name] #or without the program name  
sudo apt upgrade [program name] #or without the program name  
G-Executable:  
In Linux an executable file has no extension which means there is nothing after the dot (unlike windows in
.exe)
H-Source Code:  
.py, .cpp, .js, .php etc.

## 1.3-C++:


As mention before we will not focus on C++ in COE 510 (although in robotics it is generally more important
than python) and if you don't feel comfortable using it, then you could do fine in the course without knowing
anything about it however sometimes when you take a code for ROS from github.com for an example and
would like to modify it for your need then you have to understand how to at least read the code and
sometimes the code for ROS is written in C++. from what I have noticed the resources for ROS in C++
seemed more than python in general.
You could learn C++ from:  
Sololearn #I have mentioned it before
https://www.youtube.com/channel/UCh3TLV-vQzzcWGQ4u2jsMOw/playlists?view=1 #This Channel    
(RoboJackets Training) is useful for learning robotics in general, ROS and C++
Robot Operating System for Absolute Beginners book by Lentin Joseph
https://www.youtube.com/watch?v=GQp1zzTwrIg  
https://www.youtube.com/watch?v=vLnPwxZdW4Y  
https://www.youtube.com/watch?v=6y0bp-mnYU0  
https://www.youtube.com/watch?v=_bYFu9mBnr4&list=PL_c9BZzLwBRJVJsIfe97ey45V4LP_HXiG  


## 1.4-Jupyter/Colab:


you do not need to learn how to use them, but they could be very helpful if you want to take or test a code
from the internet (usually python code is used in them). Because they are used in a browser, you could write
code in your phone or tablet or any devise that could open a browser. Also note that they are not difficult,
and you could know how to use them in less than one day (assuming you have decent background in
programing, and you are good at python). It seems that Jupyter resources are much more than Colab. Note
that Colab is very similar to Jupyter.  
Jupyter tutorial:  
https://www.youtube.com/watch?v=HW29067qVWk  

The last three topics (Git, Docker, and Blender) are not important, and you could do fine without knowing
anything about them (especially the last two) but sometimes you might slightly need them.

## 1.5-Git:

git (with an i not an e :)) is a version control software which is an important topic for a programmer to know
especially if he/she is going to collaborate with a team. git in this course will be used to get Dr.Anis
Koubaa's cods and from other resources.
This is the only Structure that you will need in the whole course:
git clone -b [branch name. in our case usually a ros distribution (usually ros-noetic or nothing if there are
no branches)] [URL] # b is short for branch. Note that this is the only command that we will be using from
git in the whole course.
or you could also do the same as the above command manually if you [go to Dr.Anis account
(https://github.com/aniskoubaa) and choose a repository]. A repository is just like a normal folder plus the
ability to control its files (usually source codes) content versions or history since it contains a .git file. A
repository usually contains a complete code for a certain topic or project. [After choosing a repository you
could download it as a zip file by clicking on the green code button on the right then choose Download zip.
make sure that before you download a repository you choose the right branch by clicking on the master
button on the left and change it to the branch you need (in our case it is usually ros-noetic] #sometimes
there are no branches in the repository (the developer decides wither to put branches or not but in our case
most of the repositors we got from github.com have branches and usually there is a branch for noetic
distribution.

## 1.6-Docker:

This program was not used at all in the course, but it is really useful.
Have you ever wondered why when you write a code in your computer and it works fine but then when
you give it to someone it sometimes does not work or when you watch a YouTube tutorial and write the
same code as in the video, the code you wrote does not work but the one on the video does??
Without getting into the details Docker could solve this issue !
Of course, if you are busy do not waste your time on Docker. It is a subject that hopefully you might find
useful in the future especially if you are a web developer.


## 1.7-Blender:

This might slightly be used to convert some 3D models so that they will work in Gazebo. Just like Docker
this program is not needed in the course.







