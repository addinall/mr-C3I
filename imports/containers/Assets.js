// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : Assets.js 
// System       : mr-C3I 
// Date         : June  2016
// Author       : Mark Addinall
// Synopsis     : This system is the clone of C3I using newer technology.
//                Although C3I is using VERY up to date tools and design
//                coding concepts, this takes R&D a step further by
//                basing the architecture of this version around
//                METEOR/React and Bootstrap.
//
//
// -------------------------------
import { Meteor }                   from 'meteor/meteor';
import { createContainer }          from 'meteor/react-meteor-data';
import Assets                       from '../components/Assets';
import Items, { insert, remove }    from '../collections/Items';


//---------------------------
function handleSubmit(text) {
    const data = {
        text,
    };

    insert.call(data, (error, response) => {
        if (error) {
            console.log(error);
        }
        // success!
    });
}


//--------------------------
function handleRemove(_id) {
    const data = {
        _id,
    };

    remove.call(data, (error, response) => {
        if (error) {
            console.log(error);
        }
        // success!
    });
}


//---------------------------------------------
// Now set up the MONGO database for our assets.
// Link this to readings next.
//
    const AssetsContainer = createContainer(() => {
        const assetsHandle = Meteor.subscribe('assets');
        const loading = ! assetsHandle.ready();
        const items = Items.find({}, { sort: { createdAt: 1 } }).fetch();

    return {
        loading,
        items,
        onSubmit: handleSubmit,
        onRemove: handleRemove,
    };
}, Assets);

export default AssetsContainer;

//------------------   EOF  --------------------------------

