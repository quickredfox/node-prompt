# TODO:

1. There's no protection yet for two instances of Prompt trying to use openStdin at the same time.
2. Interactions between Prompt(q, cb) and Prompt().ask( ... ).tap( ... ).end() are untested.
3. It'd be nice to have an .askDiscretely() for things like passwords.
