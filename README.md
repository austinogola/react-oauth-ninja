# react-oauth-ninja

Simple React package for Google OAuth

## Installation

```python
npm install react-oauth-ninja
```

## Usage

## Import package to yor react app
```javascript
import {GoogleButton} from 'react-oauth-ninja';
```

## Use package with your credentials
```javascript
import {GoogleButton} from 'react-oauth-ninja';

const Login=()=>{
    return(
        <div>
            <GoogleButton 
                client_id='***********************.apps.googleusercontent.com'

                redirect_uri='http://127.0.0.1:5000/oauth/google'

                styles={{width:'300px'}}
            />
        </div>
    )
}
```

## Customization Options
You can customize the button using the following options as props
1. *styles* - An object for styling the button
2. *text* -   An object for changing and styling the text on the button.
3. *gImg* - An object for using a different image for the logo and styling it.


## Options Examples
## styles
Use *styles* prop to style the button size, shape, color, etc
```javascript
import {GoogleButton} from 'react-oauth-ninja';

const Login=()=>{
    return(
        <div>
            <GoogleButton 
                client_id='***********************.apps.googleusercontent.com'
                redirect_uri='http://127.0.0.1:5000/oauth/google'
                styles={{
                    width:'250px',
                    backgroundColor:'#85C3E9'
                }}

            />
        </div>
    )
}
```
## text
Use *text* prop to customize the value and style of text in the button
```javascript
import {GoogleButton} from 'react-oauth-ninja';

const Login=()=>{
    return(
        <div>
            <GoogleButton 
                client_id='***********************.apps.googleusercontent.com'

                redirect_uri='http://127.0.0.1:5000/oauth/google'
              
                
                text={{
                    value:'Proceed with Google',
                    color:'#BD87FB',
                    fontWeight:'500',
                    fontSize:'20px'
                    }}

            />
        </div>
    )
}
```

## gImg
Use *gImg* prop to change the G logo src and its size. The default is the Google logo
```javascript
import {GoogleButton} from 'react-oauth-ninja';
import {alternativeImg} from "./Images/google-button.png"

const Login=()=>{
    return(
        <div>
            <GoogleButton 
                client_id='***********************.apps.googleusercontent.com'

                redirect_uri='http://127.0.0.1:5000/oauth/google'
              
                
                gImg={{
                    src:{alternativeImg},
                    width:'40px'
                    }}

            />
        </div>
    )
}
```



<!-- Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

![descriptive alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This app will help abandoned animals get help from Animal welfare organizations
all over the world when people reporting them via this app.
This project was initally created to participate in my first hackathon - Clerk
x Hashnode Hackathon July 2021. Check out [my article](https://yuridevat.hashnode.dev/sos-animals-hackathon-project)
about the project and my experience in the hackathon.

🏆 This project was one of the Runner Up Winners. 🥳

**Blog article:** [SOS Animals app - a project for the Clerk x Hashnode Hackathon](https://yuridevat.hashnode.dev/sos-animals-hackathon-project)

![Thumbnail](https://github.com/YuriDevAT/sos-animals/blob/main/public/thumbnail-sos.png)

The idea is that when reporting an animal, the user will start filling out a form
about the animal's situation and location.
If people want to leave their contact information in the last stage, this should
give them the possibility to stay connected with the NGOs and get information
about the condition of the animal.
When submitting the form, the form should be sent to the nearest NGO station.

To participate in the Hackathon, it was a requirement to implement Clerk
Authantication, but it was finally removed because no authantication should be
necessary to use the app, to make sure to help the animal as fast as possible.

## Demo

Live view by clicking the badge: [![Netlify Status](https://api.netlify.com/api/v1/badges/f9a7f8d3-58ca-44ed-a038-ae8d2efd31a5/deploy-status)](https://sos-animal.netlify.app/)

You can also clone the project and open it in localhost, or enjoy the preview
video below instead :smile:

https://user-images.githubusercontent.com/54622834/127658950-b1964a1c-dfc3-4853-be04-9c14a35f569c.mov

# Contribution

To contribute to this project please check out the [contribution guidelines](https://github.com/YurisCodingClub/accessibility-mentor/blob/main/CONTRIBUTING.md).

## Prerequisits

Before cloning/forking this project, make sure you have the following tools installed:

- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/download/)

## Installation

1. Fork the project
2. Clone the project
3. Follow the instructions in the console:
4. Navigate to the project directory cd sos-animals
5. Install the dependencies npm install
6. Run the project npm start

## Contributors

[//]: contributor-faces

<a href="https://github.com/YuriDevAT"><img src="https://avatars.githubusercontent.com/u/54622834?v=4" title="Julia Undeutsch" width="80" height="80"></a>

[//]: contributor-faces -->