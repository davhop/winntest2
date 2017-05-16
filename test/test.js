let assert = require('assert'),
 chai = require('chai');
 chai.should();
        
const Transport = require('../api/model/transport.js');


function vehicle(v){
    return Transport.vehicle(v);
}


/** Tests de la classe Transport */ 
describe('Transport',()=>{
    describe('#constructor()',()=>{
        let transport;
        beforeEach(() => {
      // Create a new Transport object before every test.
        transport = new Transport(1, 'Trip 1',49.15,-0.32,49.07,-0.3,'car','Comment ... #1');
        });
        
        it('returns the locality name of Departure', () => {
          transport.departNom.should.equal('Cormelles-le-Royal, France');
        });
        it('returns google place_id of Departure', () => {
           transport._addressDepart.should.equal('ChIJ1bSqSclpCkgR7rWKiK3oIOk');
        });
        it('returns src for iframe google maps',()=>{
            transport._map.should.equal('https://www.google.com/maps/embed/v1/directions?key=AIzaSyAH7gbryCvy7UyxcJUFZ47rBfXQVc4O_Bk&mode=driving&origin=place_id:ChIJ1bSqSclpCkgR7rWKiK3oIOk&destination=place_id:ChIJt67J7xRrCkgRAPW8T0gUDAQ');
        });
        it('title can be changed',()=>{
            transport._title = "nouveau titre";
            transport._title.should.equal('nouveau titre');
        });
        it('coordinates from lat accepts only numerical values',()=>{
            (function() {
                transport._coordinates_from_lat = 'Jean-Pierre';
            }).should.throw(Error);
        });
    });
    /** tests de la fonction vehicle()  */
    describe('#vehicle()',function(){
        let tests = [
            {args: 'car', expected: 'driving'},
            {args: 'foot', expected: 'walking'},
            {args: 'bike', expected: 'bicycling'}
        ];
        tests.forEach(function(test){
            it('returns corresponding transport mode for google request',function(){
                let res = vehicle.apply(null,[test.args]);
                assert.equal(res, test.expected);
            });
        });
    });
});