export default function search() {
    return ( 
    <main className = "search">
        <style>{`
        #bg {
            margin: 0 auto;
            background: rgb(205, 56, 66);
            width: 600px;
            height: 1400 px;
        }

        body {
            background: white;
        }

        #searchWrap {
            position: fixed;
            width: 600px;
            top: 0;
            left: 50%;
            transform: translate(-50%, 0%);
            z-index: 1;
            padding: 15px;
            background: #751B21;
            box-shadow: 0px 5px 2.5px black;
            
        }
        
        #searchBar {
            background: white;
            color: white;
            margin: 0 auto;
            display: block;
            width: 500px;
            padding: 10px;
            border-color: black;
        }

        #buttonWrap1 {
            z-index: 0;
            padding: 10px;
            text-align: center;
            vertical-align: middle;
        }

        #button1 {
            margin: 0 auto;
            display: block;
            position: relative;
        } 

        #img1 {
            margin: 0 auto;
            display: block;
            height: 250px;
            width: 500px;
            box-shadow: 2.5px 5px 2.5px black;
            filter: brightness(50%);
        }

        #foodieText {
            text-align: center;
            vertical-align: middle;
            transform: translate(0%, -300%);
            font-size: 40px;
        }

        #buttonWrap2 {
            z-index: 0;
            padding: 10px;
            text-align: center;
            vertical-align: middle;
        }

        #button2 {
            margin: 0 auto;
            display: block;
            position: relative;
        } 

        #img2 {
            margin: 0 auto;
            display: block;
            height: 250px;
            width: 500px;
            box-shadow: 2.5px 5px 2.5px black;
            filter: brightness(50%);
        }

        #outdoorsText {
            text-align: center;
            vertical-align: middle;
            transform: translate(0%, -300%);
            font-size: 40px;
        }

        #buttonWrap3 {
            z-index: 0;
            padding: 10px;
            text-align: center;
            vertical-align: middle;
        }

        #button3 {
            margin: 0 auto;
            display: block;
            position: relative;
        } 

        #img3 {
            margin: 0 auto;
            display: block;
            height: 250px;
            width: 500px;
            box-shadow: 2.5px 5px 2.5px black;
            filter: brightness(50%);
        }

        #sightseeText {
            text-align: center;
            vertical-align: middle;
            transform: translate(0%, -300%);
            font-size: 40px;
        }

        #buttonWrap4 {
            z-index: 0;
            padding: 10px;
            text-align: center;
            vertical-align: middle;
        }

        #button4 {
            margin: 0 auto;
            display: block;
            position: relative;
        } 

        #img4 {
            margin: 0 auto;
            display: block;
            height: 250px;
            width: 500px;
            box-shadow: 2.5px 5px 2.5px black;
            filter: brightness(50%);
        }

        #shoppingText {
            text-align: center;
            vertical-align: middle;
            transform: translate(0%, -300%);
            font-size: 40px;
        }

        #Navigation {
            position: fixed;
            width: 600px;
            top: 90%;
            left: 50%;
            transform: translate(-50%, 0%);
            z-index: 2;
            padding: 15px;
            background: #751B21;
            display: flex;
            justify-content: space-around;
            box-shadow: 0px -5px 2.5px black;
        }

        #searchButton {
            width: 125px;
            height: 50px;
            background: white;
            color: black;
        }

        #scheduleButton {
            width: 125px;
            height: 50px;
            background: white;
            color: black;
        }

        #savedButton {
            width: 125px;
            height: 50px;
            background: white;
            color: black;
        }

        ::placeholder {
            color: black;
        }

        ::-ms-input-placeholder {
            color: black;
        };
        }

        `}</style>
        <head>
        </head>
        <body>
            <div id="bg">
                <div id="searchWrap"><h1>Search Results: Outdoors</h1></div>
                <div id="buttonWrap1">
                    <a id="button1">
                        <img id="img1" src="https://travel.destinationcanada.com/_next/image?url=https%3A%2F%2Fadmin.destinationcanada.com%2Fsites%2Fdefault%2Ffiles%2Fimages%2Farticle%2Fheader_food_alberta_credit_banff_lake_louise_tourism_paul_zizkaa.jpg&w=1920&q=75">
                        </img>
                    </a>
                    <div id="foodieText">Food</div>
                </div>

                <div id="buttonWrap2">
                    <a id="button2">
                        <img id="img2" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/6a/cb/50/caption.jpg?w=500&h=400&s=1">
                        </img>
                    </a>
                    <div id="outdoorsText">Outdoors</div>
                </div>

                <div id="buttonWrap3">
                    <a id="button3">
                        <img id="img3" src="data:image/jpeg;base64,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">
                        </img>
                    </a>
                    <div id="sightseeText">Sightseeing</div>
                </div>

                <div id="buttonWrap4">
                    <a id="button4">
                        <img id="img4" src="https://media-cdn.tripadvisor.com/media/photo-s/10/26/a3/f7/photo9jpg.jpg"></img>
                    </a>
                    <div id="shoppingText">Shopping</div>
                </div>

                <div id="Navigation">
                    <button id="searchButton">Search</button>
                    <button id="scheduleButton">Shedule</button>
                    <button id="savedButton">Saved</button>
                </div>
            </div>
        </body>
    </main>
    )
       
    
}