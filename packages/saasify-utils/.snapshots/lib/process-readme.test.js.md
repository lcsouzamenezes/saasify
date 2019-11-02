# Snapshot report for `lib/process-readme.test.js`

The actual snapshot is saved in `process-readme.test.js.snap`.

Generated by [AVA](https://ava.li).

## h1 not present - unchanged

> Snapshot 1

    `## ABC␊
    ␊
    #### FOO␊
    ␊
    nala␊
    ␊
    #### BAR␊
    `

## multiple h1s present - indent all headers

> Snapshot 1

    `## ABC␊
    ␊
    ## FOO␊
    ␊
    nala␊
    ␊
    #### BAR␊
    `

## multiple h1s present with h6 - indent all headers except h6

> Snapshot 1

    `## ABC␊
    ␊
    ## FOO␊
    ␊
    nala␊
    ␊
    ###### BAR␊
    `

## single h1 present - remove h1

> Snapshot 1

    `## FOO␊
    ␊
    nala␊
    ␊
    ## BAR␊
    `