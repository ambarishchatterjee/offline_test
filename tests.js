QUnit.test( "showSlides", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
  });
  QUnit.test( "multiple call done()", function( assert ) {
    assert.expect( 1 );
    var done = assert.async( 1 );
  
    setTimeout(function() {
      assert.ok( true, "first call done." );
      done();
    }, 500 );
  });