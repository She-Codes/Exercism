class Minesweeper {
  annotate(gameBoard) {
    return gameBoard;
  }
}

// '' denote a row
// if there are no quotes and just an empty array
// that denotes no rows
// [''] means one row and no columns
// to me it means one column but not multiple....
// no I guess  because there is no space that means 
// no columns.  This would mean empty columns
// (no mines):
// ['   ']
// effectively each row is an element in the array
// string match? regex?
// ' * ' or '** ' or ' **' or '***' or '   '

export default Minesweeper;