export const simpleAction = (simpeData)  => {
    console.log('SimpleAction:'+simpeData);
    return {
     type: 'SIMPLE_ACTION',
     payload: simpeData
    }
}