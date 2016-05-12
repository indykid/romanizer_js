describe('UserInterface', function(){
  var resultOutput     = UserInterface.resultOutput,
      romanizeTrigger  = UserInterface.romanizeTrigger;

  it('passes captured arabic value to romanizer', function(){
    setupDom('1');
    spyOn(Romanizer, 'convert');

    UserInterface.setup(Romanizer);
    $(romanizeTrigger).click();

    expect(Romanizer.convert).toHaveBeenCalledWith(1);
  });

  it('updates result', function(){
    setupDom('irrelevant');
    spyOn(Romanizer, 'convert').and.returnValue("roman numeral");

    UserInterface.setup(Romanizer);
    $(romanizeTrigger).click();

    var resultElement = $(resultOutput);
    expect(resultElement.text()).toEqual('roman numeral');
  });

  it('updates result on click of romanize button', function(){
    setupDom('1');
    var button = $(romanizeTrigger);

    UserInterface.setup(Romanizer);
    $(romanizeTrigger).click();

    var resultElement = $(resultOutput);
    expect(resultElement.text()).toEqual('I');
  });


  function setupDom(value) {
    setFixtures("<main><input data-arabic autofocus value='" + value + "'><button data-romanizer>Romanize!</button><p data-result></p></main>");
  }


});
