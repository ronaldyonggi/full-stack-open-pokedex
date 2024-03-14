describe('Pokedex', function() {
  beforeEach( function() {
    cy.visit('')
  });

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})