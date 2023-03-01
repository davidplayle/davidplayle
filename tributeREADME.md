# Planning 
For this project I was asked to create a hobby page. This could be about a particular hobby of mine, a public figure I admire, or an interest. I have chosen to create a web page in tribute to Lord's cricket ground. Cricket is a sport that I really enjoying watching and I have been lucky enough to go to Lord's and watch either my county Middlesex or my country England play. 

This web page will be part of my website, so therefore I need to create a layout that is identical across the website. Since the invention of tablets and smartphones, we are required to adapt web pages to suit multiple devices with different screen sizes. 

![alt Text](/MyProjects/images/desktop%20version.drawio%20(1).png)
![smartphone](/MyProjects/images/Smart%20Phone.drawio.png)

The layout of my web page will include a header to inlcude the title of the web page, a navigation bar which contains a list of tabs to different pages on my website. The main content will go in the middle where I will display my articles, and we will then have a footer at the bottom of the page. 

The web page will be divided into three different sections. I will include an article on the reason behind the name of Lord's cricket ground. This will include a image which we can change later on in the development stage as the view port changes from desktop size to mobile. 

The next section will include an article on who actualy plays cricket at Lord's cricket ground. This will also include some historical data to go on some cards. Finaly the last to articles will mention the MCC members who they are, what they do? and how you can sign up to become one. As stated in the project, I am required to include the date inside the footer of the web page.   

# Building

I started of with creating the foundations of the web page. This will include the header for the title preferably in using a headline tag, and a navigation bar before I can inlcude the main content. 

For the naviagation bar I wanted to have a basic menu to guide the user to other web pages on my website. Within the navation tag `<nav>....</nav>` I listed my web pages using a div per link. I then used each div to encapsulate hyperlinks to these web pages. 

    <header>
        <h1>Tribute Page</h1>
    </header>
    <nav>
        <div id="link"><a href="index.html">Home Page</a></div>
        <div id="link"><a href="tribute.html">Tribute Page</a></div>
        <div id="link"><a href="project.html">Project Gallery</a></div>
        <div id="link"><a href="movieData.html">Movie Data</a></div>
    </nav>

Each hyplerlink is referenced to the aproariate `.html` document for that web page using the `href` attribute. 

Within the main body, I can now start to put the main content of the aritcles. I used a container called section `<section>....</section>` to keep all the content within the container. An article needs to have a heading therefore I used a heading size 2 element. The first article required an image to go with it, so I created a picture tag `<picture>...</picture>` and within that picture tage will be an image tag `<img>` and a `<source>` tag. Both of these tags within the picture element will store different images. While browsing the interent for an image of Sir Thomas Lord I came across a portrait of him, and saved it to the directory. Within the `<img>` tag i used the `srcset` attribute to reference the file that contains the image of Sir Thomas Lord. The main problem is that the image will use up the entire space of the page refelecting its full size. To get around this I had to create a css document, refered to the image tag using the element selector and giving that img element a width and height property which tells the img to adjust its size to the specified height and width of its container. As this image was a portrait, I decided to float this image around the text in the article. This also included some padding as well so the text wasnt up agianst the border of the image. 
    
    <section>
        <picture>
            <source media="(max-width: 854px)" srcset="MyProjects/images/lords_view.jpg">
            <img src="MyProjects/images/thomas-lord_2.jpg"></img>
        </picture>
    </section>
    ---------------------------------------------------------------------------
    img{
        border: none;
        width: 170px;
        height: 202px;
        float: left;
        margin: 2px;
        padding: 2px;
    }

When the browser reads this file it will see that the image should be positioned on the left with some margin and padding. Most importantly I need to position all the content of the page towards the center. To achive this I refered the the header, nav, section, fotter elements and gave them a maximum and an minimum width they need to work of. The maximum the view-port width the borwser can see that the those elements can be displayed at a maximum of 990px. The smaller the view-port width the browser needs to shrink those containers to a minimum width of 480px. The mimum size of these containers is the minimum view port size I will work of representing a typical size of a smartphone. Finaly to centralise all of our content, I used a margin property with a value of 0px auto. To prevent content from overflowing form its container, I used the overflow property with the value hidden. 

    max-width: 980px;
    min-width: 480px;
    margin: 0px auto;
    overflow: hidden;



Within the picture element, I have used a source tag and an image tag. The source tag is used to store an image to be used when the view-port width shrinks to an smaller size. Using the media attribute, I can specify at what exact screen width I want the alternative image to be displayed. The alternative image have used will be or an arial shot taken from above the stadium. 

When the view-port changes, this will also have an effect on the navigation bar. I have decided that I would like each tab to be stacked under each over in row direction. This required me inlcude the `display: flex`, set the `flex direction` to `inline-block`, and set `flow-wrap` poreprty to `wrap`. Initialy this will prevent the navigation tabs from coliding into each other when the view-port narrows. I now need to use a media query to specify that the contents need to be flexed but their width is increased so they all appear stacked under each other.  

    display: flex;
    flex-direction: inline-block;
    flex-wrap: wrap;
    -------------------------------------------------------------------------------
    @media screen and (max-width: 854px){
        nav div{
        width: 750px;
        font-family: Arial, Helvetica, sans-serif;
        }
    }

The next section inlcudes a seperate article on Who plays cricket at Lord's?. This will inlcude several paragarpahs mentioning several records that have been acheived by indiduals who have played at the ground. I have decided to include some cards listing records that have been achived as on the honours board at the ground. I used a div to list the records that have been broken, starting with the highest indiviual score by a batsman overall. Most wickets broken by an Englishman, and most wickets taken by overseas players. Each individual record will be listed using the `<li>` element. 



I plan to have each div to be stacked under each over when the view-port reaches and maximum width of 854px. I can apply this to the exact media query used in for chaning the size of the navigation tabs.

    @media screen and (max-width: 854px){  
    nav div{...}
    .flex-items{
      width: 450px;
      font-size: 16px;
      font-family: Arial, Helvetica, sans-serif;
     }
    }

In the next article I am giving a brief description of the MCC, discussing their history and compare it to today. I feel this article requires an image aswell but this tiem floated to the right instead of the left as displayed in the first article. An alternative image of the MCC will apear when the screen width narrows down. And finally in the last article I have given information about the MCC and what they do today and how you can become a member simply by going to an external website. I used the `<a>` element which holds a hyperlink which is referenced in the hreff attribute. 

In the footer of the page, I have included the date as requested. This would need to be updated evertime the page was opened. I therefore created a javaScript file which contains a function that is assinged to the browser when it loads. 


    window.onload = function() {
        var dateElement = document.getElementById("date");
        newDate = new Date();
        dateElement.textContent = newDate.toDateString();
    }

This function contains several internal functions. Firstly it gets the the element with the id `"date"` from the html file through `document.getElementById()`. This is assiged to a variable dateElement. The syntax `newDate = newDate()` will create a date object for the current date and time. I can now reference the variable dateElement to set the value of the element date to text. By assinging this with the variable newDate I can retrieve the current date instead of the time in as a string. 


  
# Debugging  

Once I had built the page, there were ofcourse a couple of glitches I needed to see to. When I built the page, I used borders for my elements. This would give me a guidline of how I wanted things placed on the page and wehter they would be overlapping or not. This can be easily corrected by setting the border property to none. 

Some of the images needed padding around them by increasing the value of the padding property. In css has have to be specific when targeting a certain element. For this reason I created a class attribute or an `ID` attribute to target one element instead as I have used multiple `<div>`, `<section>`, `<img>` elements throughout my html page. Here is an example of an image that has and ID attribute valued "mcc".

    .mcc{
        border: none;
        width: 290px;
        height: 202px;
        float: right;
        margin: 2px;
        font-family: Arial, Helvetica, sans-serif;
        background-color:none;
        padding: 2px;
    }

The headings in each article needed to be centralised using the proeprty `text-align:center`. I needed to do the same to the div containers that listed the records broken by individual players. The headings looked better centralised and in a bold style format. I was able to do this through a technique called `'descendant selectors'` where you specify the eaxct element through its parent. 

    .flex-items, b{
        text-align: center;
    }


Each record that was listed under a bullet-point needed some padding to be applied within its div container. 

    .flex-items li{
        text-align: left;
        padding: 2px;
    }


One of the glitches was a minor one. I couldnt get the title in the header to be centralised. A property that was preventing me from making this achievable was the `display:flex` . Once I removed that property I could then apply the `text-align` property. 

