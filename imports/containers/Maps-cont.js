// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : Maps-cont.js 
// System       : mr-C3I 
// Date         : July  2016
// Author       : Mark Addinall
// Synopsis     : This system is the clone of C3I using newer technology.
//                Although C3I is using VERY up to date tools and design
//                coding concepts, this takes R&D a step further by
//                basing the architecture of this version around
//                METEOR/React and Bootstrap.
//
//                In he course of this R&D session, I have implemented
//                this app using a couple of different architectures.
//                I have also implented the GoogleMap routines in
//                three seperate ways.  The traditional, include the API
//                from GOOGLE and go for it!  The second, I encapsulated
//                my METHODS and PROPERTIES and a MODULE OBJECT MODEL
//                with exposed API entry points.  This has bee my
//                preferred method of coding JS APIs for the last few years.
//                That model worked well with both regular front end coding
//                with vanillla JS/HTML5/CSS and the REST AJAX/PHP back end.
//                It also worked well on the React and Bootstrap only architecture.
//
//                This version is different again.  I have used the METEOR
//                framework along with Bootstrao and REact for this version.
//
//                React is a little different to most frameworks in that it doesn't
//                seperate template from routing from models.  It leads to a component
//                driven design which I quite enjoy.  Seems a lot closer to a
//                purist OOD/OOP paradigm.
//
//                METEOR wants to be different again.  It encourages the separation
//                along more of a MVC model.
//
//                This first file describes the API CONTAINER for our mapping.
// -------------------------------


//-------------------------------------------------
export class MapContainer extends React.Component {

    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        }
        return (
            <div style={style}>
                <Map google={this.props.google} />
            </div>
        )
    }
}



