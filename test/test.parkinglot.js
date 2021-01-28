const expect = require('chai').expect;
const ParkingLot = require('../module/parkinglot');

const parkingLot = new ParkingLot();

describe('Create Parking lot of size 6', function () {
  it('create_parking_lot 6', function () {
    var result = 'Created parking lot with 6 slots'
    var input = parkingLot._initialize(6)

    expect(input).to.be.equal(result)
  })
})

describe('Add Park KA-01-HH-1234', function () {
  it('park KA-01-HH-1234', function () {
    var result = 'Allocated slot number: 1'
    var input = parkingLot._add('KA-01-HH-1234')

    expect(input).to.be.equal(result)
  })
})

describe('Add Park KA-01-HH-9999', function () {
  it('park KA-01-HH-9999', function () {
    var result = 'Allocated slot number: 2'
    var input = parkingLot._add('KA-01-HH-9999')

    expect(input).to.be.equal(result)
  })
})

describe('Add Park KA-01-BB-0001', function () {
  it('park KA-01-BB-0001', function () {
    var result = 'Allocated slot number: 3'
    var input = parkingLot._add('KA-01-BB-0001')

    expect(input).to.be.equal(result)
  })
})

describe('Add Park KA-01-HH-7777', function () {
  it('park KA-01-HH-7777', function () {
    var result = 'Allocated slot number: 4'
    var input = parkingLot._add('KA-01-HH-7777')

    expect(input).to.be.equal(result)
  })
})

describe('Add Park KA-01-HH-2701', function () {
  it('park KA-01-HH-2701', function () {
    var result = 'Allocated slot number: 5'
    var input = parkingLot._add('KA-01-HH-2701')

    expect(input).to.be.equal(result)
  })
})

describe('Add Park KA-01-HH-3141', function () {
  it('park KA-01-HH-3141', function () {
    var result = 'Allocated slot number: 6'
    var input = parkingLot._add('KA-01-HH-3141')

    expect(input).to.be.equal(result)
  })
})

describe('Status', function () {
  it('status', function () {
    var input = parkingLot._print()
    expect(input).to.be.equal(input)
  })
})

