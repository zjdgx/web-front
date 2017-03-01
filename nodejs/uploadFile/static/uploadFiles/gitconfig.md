[alias]
    co = checkout
    br = branch
    ci = commit
    st = status
    last = log -1 HEAD
    cf = config
    md = commit --amend
    dt = difftool
    mt = mergetool
    line = log --oneline
    latest = for-each-ref --sort=-committerdate --format='%(committerdate:short) %(refname:short) [%(committername)]'
    ls = log --pretty=format:\"%C(yellow)%h %C(cyan)%ad %C(red)%d %C(reset)%s %C(green)[%cn]\" --decorate --date=short
    log2=log --pretty=format:\"%Cgreen%ai [%h] %C(cyan)<%an> %Cred%s\" --date-order
    hist = log --pretty=format:\"%C(yellow)%h %C(green)[%an] %C(cyan)%ad %C(red)%d %C(reset)%s\" --topo-order --graph --date=short
    type = cat-file -t
    dump = cat-file -p
[color]
    diff = auto
    status = auto
    branch = auto
    ui = true
[http]
    sslverify = true
[https]
    sslverify = true
[push]
    default = matching
[merge]
    tool = meld
[diff]
    tool = meld
[difftool]
    prompt = false
