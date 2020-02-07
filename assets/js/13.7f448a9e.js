(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{341:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"git-分支操作与版本回退"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-分支操作与版本回退"}},[s._v("#")]),s._v(" Git 分支操作与版本回退")]),s._v(" "),n("p",[s._v("分支的重要操作，stash的用法，以及版本回退")]),s._v(" "),n("h2",{attrs:{id:"分支的概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分支的概念"}},[s._v("#")]),s._v(" 分支的概念")]),s._v(" "),n("p",[s._v("首先针对commit操作，就会形成一条完整的工作时间线，新的版本会指向旧的版本。")]),s._v(" "),n("p",[s._v("分支的出现会把工作时间线分叉，可以创建多个分支，比如：master分支、dev分支。")]),s._v(" "),n("p",[s._v("值得注意的是：无论在哪个分支，HEAD始终指向当前分支。HEAD文件存放目录在.git文件夹中。")]),s._v(" "),n("h2",{attrs:{id:"分支的重要操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分支的重要操作"}},[s._v("#")]),s._v(" 分支的重要操作")]),s._v(" "),n("p",[s._v("1.查看分支")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("2.创建分支")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch newBranch\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("3.切换到newBranch分支")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout  newBranch\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("4.删除分支newBranch")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d newBranch\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#不能删除当前所在的分支，得先切换到别的分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#若被删除的分支有文件改动，可以使用 git branch -D newBranch 强制删除")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("5.创建new_branch，并切换到该分支")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b new_branch\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("6.将修改的new_branch分支文件合并到master")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch master\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge new_branch\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("7.对分支进行改名")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -m master master2\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将master改名为master2")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("8.显示当前分支的最新一条信息")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -v\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("9.以图形化的方式查看提交历史")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --graph\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"分支使用的几种场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分支使用的几种场景"}},[s._v("#")]),s._v(" 分支使用的几种场景")]),s._v(" "),n("p",[s._v("1、master分支上创建dev分支，在dev分支做修改后，直接合并到master分支")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -d dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在dev分支上进行一系列文件的操作...")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge dev\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("img",{attrs:{src:"/views-img/fast-foward.png",alt:""}})]),s._v(" "),n("p",[s._v("git自动合并，使用fast-forward模式。")]),s._v(" "),n("p",[s._v("但是这种模式有个弊端，删除分支时会丢掉分支信息。可以在合并时加上--no-ff参数禁用fast-forword，这样会多出一个commit id，比如：git merge --no-ff dev。不过，这种使用的场景不多，因为没有必要。")]),s._v(" "),n("p",[s._v("2、master分支上创建dev分支，在dev分支做修改后，再在master上做修改，然后合并dev分支")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -d dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在dev分支上进行一系列文件的操作...")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在master分支上进行一系列文件的操作...")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#文件test.txt冲突，解决冲突")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" test.txt\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[n("img",{attrs:{src:"/views-img/merge.png",alt:""}})]),s._v(" "),n("p",[s._v("3、切换分支，不是切换到某个已命名的分支（如：master、dev），而是切换到某个具体的提交（如：9sa68），修改后提交成为新分支，再切换为master分支。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout 9sa68\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#当前HEAD会指向9sa68")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在9sa68上进行一系列文件的操作...")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cimmit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'commit 9sa68'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#此处提交会形成一个新的提交，如：81sed5。若不提交，直接切换回master，会报错")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch newCommit 81sed5\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对81sed5这个提交创建一个分支名，叫newCommit")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[n("img",{attrs:{src:"/views-img/commit.png",alt:""}})]),s._v(" "),n("p",[s._v("4、当前在dev1分支上开发，开发了一半，按规范没法提交。又被要求去分支dev2上做一个临时的紧急开发，开发完dev2后，再回来继续开发dev1")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch dev1\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在dev1上开发")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash save "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'temp save'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#临时保存当前的开发进度。若不保存，直接切换到dev2，会报错")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch dev2\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在dev2上开发,结束后切换回dev1")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch dev1\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看在dev1上所有的临时保存")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#恢复最近的一次保存，并将该保存删除")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash apply\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#恢复最近的一次保存，但并不删除该保存。若想删除序号为0的保存，git stash drop stash@{0}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash apply stash@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#恢复序号为1的保存，但并不删除该保存")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在dev1上继续之前的开发")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("h2",{attrs:{id:"版本回退"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#版本回退"}},[s._v("#")]),s._v(" 版本回退")]),s._v(" "),n("p",[s._v("1.回退到上一个版本")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard HEAD^\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard HEAD~1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("2.回退到前一个版本")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard HEAD^^\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard HEAD~2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("3.回退到具体某个版本（可以是前面的版本，也可以是后面的版本）")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard 1aa8ds\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1aa8ds表示具体某个commit_id")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("4.查看操作日志")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#git log只能看到前面的提交日志，但是git reflog可以看到前后所有的commit_id")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);