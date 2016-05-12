describe('Romanizer', function(){

  it('converts 1', function(){
    expect(Romanizer.convert(1)).toEqual('I');
  });

  it('converts 2', function(){
    expect(Romanizer.convert(2)).toEqual('II');
  });

  it('converts 3', function(){
    expect(Romanizer.convert(3)).toEqual('III');
  });

  it('converts 4', function(){
    expect(Romanizer.convert(4)).toEqual('IV');
  });

  it('converts 5', function(){
    expect(Romanizer.convert(5)).toEqual('V');
  });

  it('converts 6', function(){
    expect(Romanizer.convert(6)).toEqual('VI');
  });

  it('converts 9', function(){
    expect(Romanizer.convert(9)).toEqual('IX');
  });

  it('converts 10', function(){
    expect(Romanizer.convert(10)).toEqual('X');
  });

  it('converts 11', function(){
      expect(Romanizer.convert(11)).toEqual('XI');
  });

  it('converts 15', function(){
    expect(Romanizer.convert(15)).toEqual('XV');
  });

  it('converts 20', function(){
    expect(Romanizer.convert(20)).toEqual('XX');
  });

  it('converts 49', function(){
    expect(Romanizer.convert(49)).toEqual('XLIX');
  });

  it('converts 94', function(){
    expect(Romanizer.convert(94)).toEqual('XCIV');
  });

  it('converts 164', function(){
    expect(Romanizer.convert(164)).toEqual('CLXIV');
  });
});