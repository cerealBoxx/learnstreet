// This function tests a character to see if it is a separator between words.
// It returns true if the character is a separator, false otherwise.
function isSeparator(ch)
    {
        if ( ch==" " || ch=="," || ch=="." || ch=="!" || ch=="?" )
        {
            return true;
    	}
	else
		{
            return false;
		}
        // REPLACE THIS CODE WITH YOUR isSeparator() METHOD
    }

// This function tests a character to see if is an alphabet, digit or general things which are parts of words
// It returns true if the character is a typical part of word, false otherwise.
function isPartOfWord(ch)
    {
        // REPLACE THIS CODE WITH YOUR isPartOfWord() METHOD
        if(!isSeparator(ch)) {
            return true;
        }
        return false;
	}
// This function takes a string text as input and returns a collection of words as output. From this collection of words, the number of words are displayed automatically.
function countWords(text)
    {
        // REPLACE THIS CODE WITH YOUR countWords() METHOD
        var len=text.length;
        var pos=0;
        var word='';
        var words=[];
        while(pos<len) {
            var ch=text[pos];
            
            if(isPartOfWord(ch)) {
                word+=ch;
            }
            else if(isSeparator(ch)&&word!==""){
                words.push(word);
                word="";
            }
            
            pos+=1;
        }

        return words;
	}
