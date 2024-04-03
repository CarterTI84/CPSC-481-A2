export default function tutorial1() {
    return ( 
    <main className = "tutorial1">
        <style>{`
        #bg {
            margin: 0 auto;
            background: rgb(205, 56, 66);
            width: 600px;
            height: 1000px;
            text-align: center;
            color: white;
        }

        body {
            background: white;
        }

        #welcome {
           padding: 10px;
        }

        #image {
            margin: 0 auto;
            display: block;
            height: 500px;
            width: 500px;
            box-shadow: 2.5px 5px 2.5px black;
        }

        #instructions {
            padding: 20px;
        }

        #wrapper {
            margin: 0 auto;
            text-align: center;
            width: 500px;
        }

        #but {
            background:white;
            color:black;
            text-align: center;
            width: 75px;
            height: 30px;
        }

        `}</style>
        <head></head>
        <body>
            <div id="bg">
                <h1 id="welcome">Welcome to Visit Alberta!</h1>
                <div><img id="image" src="https://cdn.discordapp.com/attachments/1195122373427478588/1214816251164098590/image.png?ex=65fa7ccc&is=65e807cc&hm=c0c48e099ab4bf7af3dee9e7f0a98153b384cfca91a11775919ad738e5340fa9&"></img></div>
                <div><h2 id="instructions">{`Access the search page by pressing the "Search" button on the bottom of the screen. Then search attractions by pressing a filter button in the middle of the screen or search by a keyword using the search bar at the top.`}</h2></div>
                <div><button id="but">Next</button></div>
                <div id="instructions"><button id="but">Skip</button></div>
            </div>
        </body>
    </main>
    )
}