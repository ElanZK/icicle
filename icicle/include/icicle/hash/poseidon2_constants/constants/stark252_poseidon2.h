#pragma once
#ifndef STARK252_POSEIDON2_H
  #define STARK252_POSEIDON2_H

  #include <string>

namespace poseidon2_constants_stark252 {

  /**
   * This inner namespace contains constants for running Poseidon2.
   * The number in the name corresponds to the arity of hash function
   */

  int full_rounds_2 = 8;
  int half_full_rounds_2 = 4;
  int partial_rounds_2 = 83;
  int alpha_2 = 3;

  static const std::string rounds_constants_2[] = {
    "0x547c0b2119ccef0edbc86fef139ac3b009371cd0e7b823d39086db668f01a67",
    "0x25d13966d9b1d8a8b0a24461d3548b968034a2df3baf003380f6628fc031395",
    "0x3bccbb230b3e2951552f50783cddfefcd69dfbbe69b9e3b374da25b09ddcd5d",
    "0x21dd7103eebcfa472c21d0071d7fe92c59ec5d27b47ad2a2284049e184e980d",
    "0x5f29c0816a486384e7f80f3bc851421a590462a07f4c94bf2e9feda3f796f44",
    "0x2cafed0401fcd9e7e471d428b5029935eb90cafedbcc2061417e694258004a9",
    "0x1bbe0f12ca1a4896ac0d8a9acde51016c354b5b2b32ea01d8c6480be8eb6515",
    "0x5a00c0e49379f32aaca35ba153e947ca0cb0354b3d066ffbb51c5d35db97274",
    "0x4ed2eac0f68dc99095ca866a1f8de54c2ce24d7b2eea53b6b3d6a2f0655d2de",
    "0x28f07ea801653c1f3e92d077be3f5f80e21b398f6f0984a960fe1ef953808c1",
    "0x3031352c19ed7c9b4f9189f1661b74e5d79306940d559c0fc1e1cf8205baf17",
    "0x29d4ef4f86ef2da1108691d6eb38ea16ac6040c227f110d94103565c2cfc809",
    "0x3c6197ee62401f1f8977382b49b73ba48ac51c7f19031e277ae3b98f1df3641",
    "0x1a989777c18e767d3ba23bb7d092d25ec8978fe9052e3e9b5b089f65be4f600",
    "0x4d86e1df4ca9f1d14661e0dc8bca94bbb857b55e9ce0eaa506aa9f75d2fdbc8",
    "0x4e2435293bac0c255aff4e43d7ddd82bb96b28f7e0945fad04c6e76174c3833",
    "0x1687b18f40aaa3b781ab58b35e48931c1d901e3c1bd2a2574d6059d4baf1383",
    "0x61ae7be0477c61ad41a6970bc9be7be513d31f81d1193f2a1780cf05b1c46bb",
    "0x4c7e92fe815f23146a4ec82e7291a08a5b177ef5764dcf46df2ca214f970c01",
    "0x7f92042f6010c6e0cd9a7e19f1faa9c9dc2f43481ed1660bcd0e8c1caa5e91e",
    "0x37e4fb5f740b26f6ba0ee5ff3f2c53821178996a7eb902b1f1083c81db164cb",
    "0x16cf786290c436e88ad1df8ac7168e25e18305522efa0829208c24bf86b5669",
    "0x92c72a27c02ee315ef00e56f02238aa85537543a29b7b3f0c3e9e2a8cc0a60",
    "0x1d0551aff5c76b13f93d024efb943c21cf311ceb8ef3e7bf2b27a76493b6a5",
    "0x180dc73da8e91917462275367c3e5301bc76b00d521265a5ec41a4d6af10182",
    "0x44c7608c594a3acee1aa1a97fd7b9c721d15dc5d1cfd880ac281c5480552584",
    "0xc81530a72f213c5a9b84c8165052f83d3f45a79706411c19aa026f67461be8",
    "0x7c983049b9a9c7216a4fe15846ca6252c4ff30a07b18f228ad624f66b44fbc8",
    "0x2e270ed79af756eb7d526c8381dd650b56acebf3d1a47b92f79f123431227cd",
    "0x2bee386fbe7d24ae7baf9edf2e72410a88234f388d61307b77f43df3cecb723",
    "0xe4b72eedc660ddff42c37a9ce1c81f3643bbe6db5df2b8779975943b73c2b5",
    "0x7adfd649cbe1e15a2dc03a9080cc0d163ccc972c22d9394b5cb390c9d78f0e",
    "0x758669f21b1dee03b8c3da7f45a694a48c3e353be1039c5b1db16591620b0cb",
    "0x66fff1c7b640bd0e2c4b380b116e31e8882cf3870b343a84d96ff15ddbcbd3d",
    "0x13514bc819eef10dfdf7ad2c4bdc2a0bf264f9b3d360ce940a71b6b8e561a82",
    "0x2d5d38ac5c74a536239987e480ee76d139e94f294520d4d24630520fa93fedd",
    "0x5ada8c0d37e34ab419e2ac4e251a98693405dceafb3f698dd8c0e23e801b0ee",
    "0x2d8a431002eb79faf0caa66a74e9a4d3c1dcbcdb8035b97e29fb623b261c2b7",
    "0x246b834aad5cff22d6f8178662be73677348ec988ae060fe271d101a78011fc",
    "0x74a630a4a6a6b4443784b7146362bc295bf928f84aea5a67587e6e4e03ad6be",
    "0x5db46563ed853ff54e08677fdbf01d949fe1f0c96c7a926afab0356eb074e74",
    "0x31f4e332ec2fe8e993688914786bb8f5f950395576fbeb19bfdc56bea49caee",
    "0x1b0b4876b253e95ff1394b933c226e75ede88d5023dc44573f38664ef350a21",
    "0x5c37c814dffc2cfe37720760b434a1682623212530c5929ceb82ef7f025ce5a",
    "0x4e370cb20d62961681326a38b6d77319ce96f1d5ea1a0712c8269cf7d984ce",
    "0x7753e11f6e929f72e3e7c8a73341e57cb9b69e2a9771d6695df9915facc6e2",
    "0x75a6ff65d7240c38fd58bb5b648d17a2920a8be26578256f0349e94b47e30a6",
    "0x1e6e4b3ecf515d600dbca93a19bba9192c71235dd26f805c9e4c9489fed0737",
    "0x6c71a1d241aabf094ab7cd883c8793a194c29285a9e257d76577594b4fe80ea",
    "0x5e09a515a2c2a575ef9d36c5f7dba753c17458085ff9bdef92d490a557414a3",
    "0x4e33bfdbde19b204b37819258fab2324b0c5d13f6b7d8f229e9aa9400c4db7a",
    "0x3235c515b0abb1d7ea83dedc9e73c4ff94c6d89c087fbdf740cb6a5f1a7d88f",
    "0x3776e363b266f1649545c791d98008bdf2a81a15b80c88d3f33d3d5bcd09d83",
    "0x2e9f55dd45fe9b0e98e8cc3b6158315cab3dace7484d3718cb8893336c8e8b4",
    "0x5219ff0ed15e8c02731b1fb696e4d832db1981620fb4b9017cc88422216e949",
    "0x135c64c5898ddf9ffe2f29ca8e59e208c8c803b375af5927f6d376617c36bb9",
    "0x72a5c93c6ca7489ee1fc3be830fec666f1417c273547e727862b88e5db1b546",
    "0x9bbc3f6a03bab8fa14731c8e16e936444720d4cbb3d55ce1275cdc16880342",
    "0x3a81bbf22787518445d9d0ff992f5bf5ccee2616cf86b5966105f7a448f3508",
    "0x5a1d9c05b71975fee04503657d8350ca3e577114eb3dc246ac5e639971a8f1c",
    "0x317c885cee24ac8039e3c46f747e6adb8377ef73b93f004073b4e92d16622aa",
    "0x7b87d4724075c7dd7619cad770165090b1845fc064a06dbaf4ba018df21667e",
    "0x7995afbb2c5916bc56967866ca2e04ea35cc40d4dcac5fa1182b5e3193c9e2",
    "0x429ee3d90493feeb715f7fa9fc7b7515473ff84c8d59c5c71273636b5c53335",
    "0x460b2e3a256bd633733d59bf785e1ba089509bff8a453bc52e1e8c4eab86685",
    "0xa9cabbe0d7dcd5011b30a60b1cd32f08fc126e18f2d05c6e721485f4d14f97",
    "0x728bb0861a5e024d9d476bd5e505e753874690cb1e6d6f234b9de0e9b0a015d",
    "0x4e39726d6f50b52ed26241dafed19e2e09611a93045d330b271a2db4c1d9d92",
    "0x518ca3cd26b67044826335d1c551ac4845c1d744e7d462fbaf5c0979f05a427",
    "0x18375cc71cba17be6660ce77b26812e06a4776e4358e57d5d8cfbd6593b7265",
    "0x339d48eeff4196ab53d97ae0363ce9ba4494bcbbd97498f4661431345482c0a",
    "0x39fbc157fa6c43721f0dc424e0fa5a1d449c37433f7bbc99ffdbfc588c78e87",
    "0x712bf71264b6ae18fbfd1463893f0168e797cc73b1cdaf46a4a95ee363a8452",
    "0x495e1038adfde7f84eea0a18eb4f26587c8abcb8609931430a5870f54463749",
    "0x71b316c21bb7118b81095eae756f80582b9607c5f717c0459311ae30930a27a",
    "0x334f9dd79a0f6c414a3a5ab35af1e82d4850d12e1bb667aecdf193db60d986",
    "0x69fe47c40a6a2cb5f04f3433692525b1fc94c2d94da3f17d72b66b17fb83568",
    "0x7e36a5063e3a2f3995c758d753ed1b83efade0904e754c45ef347c169a81b0f",
    "0x1ca747d60329c52b79e2b9e441c048f59632c8ef746caf06e6ace7f4da7a4d1",
    "0x983bbb25e2a25d26246a358c85b4ab2b972e1529c6bb79caa997b7b2c9f835",
    "0x15d17ec5c8ea2441151a685f3b7897370242f43856ab4510dc5ad8fd8bc622a",
    "0x25773c6d359f9f47dd3b9aa43a74cd10eee88c9b33e6cfbe5cef5913376b98e",
    "0x18b7d09ea2160a93d704a7fd6ac433d03779bde1bfa6e0e8249672c05f33d5",
    "0x3c605071a551b3c627189556e66306eb0252a20b883ff03bc3216a8bd3076b3",
    "0x7bc95c89ff975920f966976541a844f95e0fd839a6f8d55a2fd1ff271689d85",
    "0x311a4fc0648a10eea000bb87b694bcd1de36dafc42bd3e85531b7b4da54d003",
    "0x263bdf49ef52abdb380fa39d099816fc5b99d45539b693227808320a5434844",
    "0x7221b729f57c11996225e97f05e871d497c8d5e0ca51c45777b286869a055aa",
    "0x5ae850634be1177ddfafffce8483e6f2040c50c2ea845ea08b9cde7ca5ff6da",
    "0x2314df976789a54ce4748fb27c5be848ec9b35d978b203ea113de0be57817db",
    "0x5ed9ac105b6e780b443c04acd33aec92c47e4bc4e22d5f804b9637f3e724890",
    "0x645367c00075f5ad00074cb63c54ad3737ac523e8485a1dd85c22ca1cb57528",
    "0x5d11d6479ae2f83709e55748409776a7697d325d0ca4f4be33e9f4df19bdc3c",
    "0x66abdc8ee54c2e5f57f39383b101cc43d1de20ec7060cd322162edd1603e832",
    "0x514b2cfde5b0e7b842920feb1d2d82a5a8f8e1fced5afc497f2ef83cc952b9a",
    "0xf8bc333bade920251d130c5143117bb178aab3e49f884f5370adb294b98f4c",
    "0x1e1d534634535da8e078192b583ce3c53313fca61db75fb1dff94bfa84b8421",
    "0x3aa63047d50ee752fef88aa3339f8b04c3f4b890904ec7e09571b9351ba4633",
    "0x66113b91714e3aa9bf802907f20c6bee21a5c4daf5c5097f236559f46d8f948"};

  static const std::string mds_matrix_2[] = {"0x2", "0x1", "0x1", "0x2"};

  static const std::string partial_matrix_diagonal_2[] = {"0x2", "0x3"};

  int full_rounds_3 = 8;
  int half_full_rounds_3 = 4;
  int partial_rounds_3 = 83;
  int alpha_3 = 3;

  static const std::string rounds_constants_3[] = {
    "0x1caafe19abc51e89d9e19e96658904fed74eb9e5769b70e3f9b786afb30dc0a",
    "0x6a49348a28b19f4c27358c56b807ada552c834c555fb0039e59af9de62c2019",
    "0x5228a48d4fc955881700a9c8d791626098428056657435212fe5e9f844b06d",
    "0x3ba61c6bd818a9f8226c750ee48812ca090a6b1e61c4c403d59018076e4bc8d",
    "0x6e2a2531c5b77e40fa42f804978db49ec3128dfc512eda0322e76ba7192c1e8",
    "0x46401bacd635a7dd2d291a4029da3c669881e860c0b6ac438f32d720cc5080e",
    "0x64ff3a8bd01c025e3121cea2ba866f3f5bf7ec9f670443c93dc560a8d412387",
    "0x55bfd0d83713139db5d42260cbe94f3e4c1cf21ecd5af4ea9ec8dc1d7ea2096",
    "0xc49838bac6734c9e84cfdebbfce7761c8dff31bd112aa068f3393ac6922f03",
    "0x4cdf3f1c45550cf9903fe83ff089dc57fde71f21b766cbacaa3e6c578357216",
    "0x78ca37a2a066d3cb56e4d7ca4ea372ee2e9bbd19775a196f5f879ae13fa5ab2",
    "0x69739e32d9ab7cdaa0b0bd066ead0664e8d96bb7f4a42f7d587b5de6944d329",
    "0x673fd4917a99e14cb199ca240a313958995e9eb1c47a913be7ebfbfa5d2a7d2",
    "0x30baa62b25de6a89bbc71fb99c9dc870a63d023937fe61f43b27c57617fdd80",
    "0x64886a5ef665b774177d5b4b440ab04b7a5c1a89612951b59da0d02ead8ff0d",
    "0x7d1eb7b032165794cd31827245d187ffd8f9abbdc81af7ec1cb18856a2eb4de",
    "0x2b5a99a6b751957843aabf081ea79c3c9f5de2c31262ccf3734f80fcd2762ab",
    "0x1255793b24f0f860522e3f75b6ebc07cdb7e6ff8210c16e7dc5bf7c7c71639c",
    "0x4ecddac96630b0cb9becfeb0d7dcebb50dc750362351b28888247179a8d628",
    "0x79893ab13a1e627462497ac166ba177a956ca1e3c2e8bec31c3a3d8ef89d85d",
    "0x537edab27f234a11cfbbeb3d88034ea9be6d15906806af79e83d88c7e4ccb0b",
    "0x7430f75cdc58f7263447bf5c3274918b526abd57bf1bc3242480bb1412ebd09",
    "0x65a5821b2a99f38d220b0b82f71bb614be03f4eae7cb61bfb3567765757a64f",
    "0x1fef33ca367918040276992b8e2afe308a72d58966aa187db6d6d96d0143c5c",
    "0x417e2859a8d763d9579a2de1c5b34b1f60b8abcaac63b68c3ee29460838c0c2",
    "0x659fa303e5a1b91a233b43ad73b4ab43a161d045aff0f462a3619c8c504659b",
    "0x58a5ee378a9f49acd2a79373c382573beae03a057bc40016f9847dc274ee873",
    "0x480e72fdc7c17178576f277cd3e34a78f58ee64ba969ca24c6a67e52f399d0a",
    "0x4ff6b8383cfa589064600cccba02175d4488440e2d78154c5f2064688521e9a",
    "0x1d55afec1a523ad72d6d2599fa37c9860843ad37949e273e1a71049bec721eb",
    "0x533e1fd0e8a47ac2d434c2158f2898ef5c05d76dbec11df13d3a96b77cd1f03",
    "0x1f75036b4d208493a66f0693794c3b06ea52ddbc92f938b038587a07fa1cf74",
    "0xf27c19da832f5f96835a024d153cf0a55ac70cb6850926e5c3565cce0f098",
    "0xfa6dad9c5d5fc88dd1c65bd87abab4eabb9034966c00f10a9abfbdff7721f4",
    "0x1525a9da8d1ee034362e5d750cd94c72ea2231cbf2f4bdb3a2a8dbf356c517f",
    "0x5ea0f5cd18645f5dbf6ffd7de437a7f28d756b0da77e26908e70a2582258c53",
    "0x14730fe1334bdf46740b0c47aa11b9d13a2051abc71318135a9d41651bd2ba6",
    "0x691f607600e792ecfcfd03dd9d1049486bca2aa0a1b5304ad5dac77cadfeeb4",
    "0x700810ac7be2633ff68f5ba8a7832675b4528d7d372daf74654c5dc5f76a44e",
    "0x1b9367599c0850cbd1b2ad107a7a0cf82a5fa873121ea5c97f06197144c5da1",
    "0x510d4b04f2c26e18846477272d500c929275c497e690d3ffdf4edf1d843fe8b",
    "0x2d0b0edfd9483002bb58b93b9ec72b77a323cc270d522b67e27f70856355c11",
    "0x18651665380759d056a47dd537a065b9927e26e4e08e66be57eb889617076a2",
    "0x46fe1ddfdad9e163a88677680f9805af9db4a7304f1e3da42671813120e1f9d",
    "0x686745b1f6d0f97e5e78f3b5319bf20f488f4aa8cf3654ca27642e27caba0d3",
    "0x3670f90ff89791db3c80a7cc4e4ccf84a6f986718e4b44acf05b78c1e4e445",
    "0x206310fdf701f1286e498c637e6a49003054923754908b11c8b733407308b25",
    "0x679fe3addfab71e90be3157923e14cfcdc8cf022e0c93d0a3f823e7e4b0ddc9",
    "0x3efec7fc8b364d48c4b740591411d5921f32fdf3dd1b4162564d3ed7a447918",
    "0x2519db11ea2efcbf153a26e364bf5c91260913be3ce159d26119d09868eafe8",
    "0x2359738c04c88a78e93588b994b8aa800b9a458b6a71c7689fb1c8bd647e1a4",
    "0x3dc42a576a8d93f29ccaaf9641e2481e8a552181c09836415dcf4f41ce41e1",
    "0x88b2ebf0d77df7961cf95c1712a11438f258d6c3d2e014113e3d9aef7aaa6c",
    "0x431df2e4aa221ae184afbbec3b8a06fe9ddc3ad1a24bcd98946ed1269f7fba0",
    "0x2085926430c0c3a93f8bbe276008a73413d85aadeb87c35bca9c42d05a66c34",
    "0x6ee17a022415361e687000e8cd1bfc7ec46ace8f2de29b0893e4a0778f10d85",
    "0x6b690f00074215603edab594f98465e4de28fecd90f5ba2b2cafd6a7aaa9759",
    "0x769d18543a2369458dbe0c9b7628fd2042720f8941cfe1a44358091f47a69aa",
    "0x78f414a24db5f2c6d08451073649e356c4edbd8ca66a5fd212eef588d4706da",
    "0x75a859ba682bdb6c2967300d5151dfc32e593a6c66a5f416a44466adc18ab93",
    "0x6d3b2cc9b371e8feb31d30105f13bd901fb68d66b90959248378c3cf7bb7f73",
    "0x150bd3a290bb6a4a8818d2a69aff52d5b6ce4747381f71ab996e23138ec72e6",
    "0x60e7d9da09840d7c8615afc8b77d8dbc66408514effd708aac8bd728cedc3d8",
    "0x34ddde2b9fddab828de31956a6995885cfda7f16748dd9c73c6c3e19850dbb3",
    "0x7cd1821a677861bd5e1772e138616c62e149b03972a79c902af2f21e8da7c7a",
    "0x7c6a80fb6b4c8268f0165d904f861df60ca04f2a24357a2d4bd00915492197d",
    "0x52ac8cac9cb8bea5abad085f9bdccdb1f4cc903248db7f9be69a21f65d248ca",
    "0xe9f66065c1fcde646aeeb6cdf2a9c923f9e6300e1a97965a0723cd2e038423",
    "0x572f25fccd60c87d7308a66a7fcddf580e849a6b84a9a743bd434150a9c32ec",
    "0x523f4914b37a6e6a93ebb32f11a2b676f64235f71d18881b7c79d8a9399cc8f",
    "0x48c368a4c21b1e46256bcb3c110e6ffcd418e5c33bc6bc82e18885f82eafe1f",
    "0x7f7b9dde8d7294927d73df6ed2e70fc4dfec7b1a402dca5abf8c0c648586724",
    "0x670ff50da1a477ae34d44e27a3c0e87e267322843a2f04e86c8088934fcdf57",
    "0x47d2e3788a6ce634c59af265553549586deb4c10038e6e6513ef64c26475f7b",
    "0x4096c37cc4770dc8049b4ab483818f5746ffb05cc4916a1479096113fc95720",
    "0x6322f2251894cf8934d5974be5a1018258acd2978fd99e0669ea61ce63944be",
    "0x5fcaf134497a35fd68e39a5faa41939908d1b6cfba0e1d10764cadc5892f3df",
    "0x27e8c046ca5751dd329fe0f499150bd40a7859f6616a31de35c0b73fc14e54e",
    "0x1ad15273316815c320ec79d42e535070e2b1f67e5fe6d0d54bfc1336f176189",
    "0x4c601a0d1098288096584faa8736bf4ff967e4d3a13389e2dbe2f7fba8b1616",
    "0x32c0df48c19587bf6176c7bb18fff5a4c5e6025f07f3bad827fdc8b1da682f5",
    "0x6bf016bcfe1b346dce014fd0683b65ff06c5deb8a311261ec5f163499a4f506",
    "0x68f22e49430097a2fd3446160f6900a106d6c84f7e2267123c26394187cd0e9",
    "0x28943ef3ae18150e46230d933e4799e98b1c9a8eed1b62c13ff182ca75a8497",
    "0x51939bd6cf778aae328f9812517e6f860c4b9dbe771a2755b7815a40d12f31",
    "0x72f0931ee56e22b129a42c51535b583ffc61859c08be04e0f144760ed0808bb",
    "0x36f52567bf4fa74a79ca7b625bcb7eb57103c525b7aa28dd08aa659cbdd5650",
    "0x635b5b1847b2a7fc7687c1b35f0d76fafbf1ecd26595e83c3025d96a535675a",
    "0x62357f8f54bd53cd32087d324aa13b14355702304205feb23e5a50ab611281",
    "0x6ef2b3a77797f7bace6a9866b02cf1d98f48f8c719061b6a07c698dc18d3ced",
    "0x28fcdfc38b8059df3534a0bb29699eae6a7ccd2dd6f1a28d791c95780e924f8",
    "0x6540dc764d1ef62efbacb347f79780a7b0526e6930426fb2f698364c4563120",
    "0x19c2eb9ecae2f62c644bbf6d8f0161281308851f95202d7c4b6b7741a54eee",
    "0x1dbbcb555d2b9ebe59b13c5d230539e05a1355cd45912c05e6751adb66155ef",
    "0x455a2fd9e3c2d8034d550c80e10736d99682733b35ded2775185a24012109a2",
    "0x534757d0cf17a80a60130345f66ceee6ccfd0eddb0b9e1740c71cf99f0d0dc0",
    "0x6facad21e991ed6a3871491dd8786dfb6b2b1a6ac149b6735ed249a8c9f3abf",
    "0x7dcc26d042cdb987f73227a56df5524c5b9aadfa0714a52de109c71d98bba03",
    "0x5592f68cb8c1003b35476b2b3a78c4c619d3196bd90d79412a209b1c51ae9e1",
    "0x204601234388ac5ce77bca83703b923512c87de9cd8a9191ef9f749540becaf",
    "0x5f359edc9ec808c9e1585d191796834690c8dd7c4f9b20d1fd4b34ad5ba76b8",
    "0x5c6dcffa770d4a505fc55da6a90cfdfd5b62062310e876cb3806a4db1768c98",
    "0x20e8945ed0f5c1ff4576d28bb683b859ba545a812ff20861bc73cb7c94a94db",
    "0x5e1bb202bd0ffbe37c7246abc67f34269e66be12c88b3b734ea52acd3652987",
    "0x426cd1b02689f178a17ea7858f8379ce10b2354320a7a4a2e579bf2c79832ea",
    "0x6c44f485087cd57554c72dcb55d962e0b3210228825e996de0fba726c2f3a",
    "0x6f8b831ecded2b6fd51fa94dc117dfd2e7a5990fb0ca4bb7171920ab38c17b1"};

  static const std::string mds_matrix_3[] = {"0x2", "0x1", "0x1", "0x1", "0x2", "0x1", "0x1", "0x1", "0x2"};

  static const std::string partial_matrix_diagonal_3[] = {"0x2", "0x2", "0x3"};

  int full_rounds_4 = 8;
  int half_full_rounds_4 = 4;
  int partial_rounds_4 = 84;
  int alpha_4 = 3;

  static const std::string rounds_constants_4[] = {
    "0x3ae0f1e227f07d44afdc33df7b8915d2bd01ab6dbaae60b2a134e9259cfcd27",
    "0x114d526f505e83a1b28c3d9b887ef1a3c8c5748ab23edad68598c7dcd478902",
    "0x249a1be6fdcbae398a1e73f8587cc1fca77980ebe0db094bba708090567dcd8",
    "0x6e9b4a2f5aa3ce950f161b95bc2748fd9503bbbd3044c4b14c8fcb06d614471",
    "0x45ddf8f194953abe944d9dfe6b89db5afeea9e71cd49a4b0d44d58ce67fa956",
    "0x61319c4779db0dbc97c6fb6d324769c0643323132f0f63849e404b8038c1060",
    "0x69f88e718b6f214c7b38d06fd1f7a660b24845fb218c4704b57eeadc8d1edfa",
    "0x24eb120d474e6707c6055cbbb4e5a3b787898f3870be190334bab08e9faeace",
    "0x392af08685367da5e82b508122766fc36bf1c966c83e2df55885bed13e164c",
    "0x2d1ea3eaddddd61cbf57728cc07425aac654dd92327807a10d71cd997733b3e",
    "0x1ea43fd7073a73547c58b9ec4f7b603d1131e1cbc390da838630a0ec5681d7e",
    "0x2cd7aaaee44883cfbfbc3eb2bc10fdd88363db84917f3fee72f1d416bdb1137",
    "0x4cec80c7cfd350d77b762c7761f294c2b9b90021d54800c800bb1ff25ada780",
    "0x78dc8cc28efb02c8fbeedc9131f4cf47964236288ef33de68518d4f765ad01a",
    "0x5364e342e441545b3da8e147c472b6fce34533bdf56d7358bcffc33676c2cc",
    "0x2ec782c3c6af9a5c5f6af2722878d867f81a7acf7e7c3534465d1eef1d57b79",
    "0x55b5b6a91382ef958dbc52221af428c0ce45f3c5a658587e24e9c5fe230e753",
    "0x27d6d1f46463db0c4ee3734d6d6b3bd2565f650bc90257572ba6e69724a2c4c",
    "0x44378d094cd0927fa638d954a01d6562dbaf0a0fd1a497aa9b20002a5becd26",
    "0x2177f8ffc3264b921f642a1e308a9a6fb45a362ad7992aed465eab18c2bf8a1",
    "0x7454eb1391bee4825bc1ea17efbf837a650ff4a1bb01b687e293988e4cd9dc0",
    "0x59f530f80e6d8e88109a890b5754270a95d3a319fdc84bab642ea90e857305a",
    "0xce12241eb2f1ba8761923efc2807f80a270e00e6cc15f48f46f03af36db9c5",
    "0x4631319f803ab66aed0e67099a92ac43efe14d7b6eb93d854594d7560c75de2",
    "0x7fba42108fbcb20270d591657434256b41e1f7ace4ec8a447ffab116e2c5fd",
    "0x34afa14f2b94f6c860752924e9d66c96f71a903cf8852d3c064aa8575208075",
    "0x16f7d35c844709af1263e781b173174dae0f3e16a29cdf4865a9bd241035a44",
    "0x29e2baaa8c1f891de15c99e50238a0a2b5f24d66150d26fd7fc99ad76d22f55",
    "0x6e95a6d02009bb383bbbe62904e90fff4c36c30ee1e2afce1d817c88c85844d",
    "0x7f7d392e1ec8f1b46124d6021ce434db52d05e841e1ac4106debc7daadd5ec0",
    "0x4c8881c6e3f6f7e2f56954fa3345ed7800bb62f9ac7064afeddc8bc050adae2",
    "0x3df086d966e511986118d03226580cb232adc9881ec3a9fc985cc7eb501ba18",
    "0x7fcc3f6a5d17440c5b4da4952c800b232bdc5d67faac8a2e86b855e30dcc285",
    "0x5c2bfac3abd96afd11dcc6b5d4d8adf36216ca5c254a493c7c596be0791631",
    "0x51fc674ff918fb4482f17d44cb9d9e9fb7e2bc649d157029cad49256dfeef52",
    "0x7ffbfa9129d5e19f01eff68a07ed26af9c771356190f265de3a06e4fe842f4b",
    "0x18169686c7e203a6c0ee6bde81ae847c8c112fb792a98e5057b238aea9e720e",
    "0x1de182fbf19cc39e1e4613110edbc29e3629180fb3bedddabad9ec35b733d4f",
    "0x3e1349e8d388ca1167c9c5dfe0b2147ce46935df062cb78a74bc2418479b457",
    "0x43b1940cb83e55bff0e4f5c7e5869454fb06c00f5b8e3ff3f9bc5a1fc55999",
    "0x422864182b4a4d14bc1d82734c4908c209d26ca7f155dfcccfade692e3fb2e9",
    "0x3fe6d4a2d84aef0540ad998c3ebb46c883d117b2f8d976aa98faed5837f8f26",
    "0x6546260850095602cac9da9fd063dfcb10187541517c7113fedb4ef33fd6ae7",
    "0x3325d5be966acaebc0f5621a1afdd0a3c4e2739e4286fecce3b97f89f9aa5f7",
    "0x77d11bf5378db4acb06901aadd9f658f03c1dd752d3fd9fb178ad91f345dbdd",
    "0x77523ad82921c93a46e98616c6e1b1e2e5eec09e9e69faf825990f0f42a5aad",
    "0x1212e3f4f2722f92b8f3224e2eed56273f5fc79f672aacbf1a0ac080114bc34",
    "0x6b9ba762cca8b4bfef150dfc05027f4758f74570c5e93e3cf460d117c56623c",
    "0x1768fa45ec882f38896ac997ccdf5fa312d8a6d79a0b3df9c72c15a8ee929ba",
    "0x778ada07199173134eeb70da7e3caec528385fd95b9cc9f727b602f6a7058c",
    "0x594101d59eb0bfe1733514c0a8d4940e7a8279eb502d6540354e800ba63f426",
    "0x516adc6896a6ea907c0c5a87fbaa0e38e53c5fb60eef628ddd23e4a7a97aa44",
    "0x588c1144b72cafe1251cba01b769757e70de457c7bcda9925db7c936173a716",
    "0x4e628700227c9ce28efe3601aae7d8aa67178cd4c188157cf5b17f05d0598e4",
    "0x70647385803086055e20181501dbe605836f1742fa3b96ba18c5ea11f18468a",
    "0x10daf3a04df63e03036fcd547c6b413fad9e6e59f940dcfb86c072deeca33fb",
    "0xed04326e3a573b37ea8f9953466520e795d4e12d1c64c52d3b536f47567987",
    "0x4d992639f05752dbe6c70f453fbb53855d21cc88d56aec73896e405c900f96d",
    "0xe7f902286b5a1b7d1ab7a6cec38956005b37999ac232f2ae4a6e16cf210d2e",
    "0x65ce522826d4a6bb7dd00bb04f89faa995633f42af1a0e6964edd882e3f1fd0",
    "0x64697b2715aacc32cdc721af25c5b787527acdcba5c09c13de40ac101701ed2",
    "0x6c2bad942d5295cfd69bacb2af51bcbc4ba381c58796bf463c4221541befc63",
    "0x5bbc4e2c48c21e8988fb5d91d92c60ec57993584a6dd5b8b4613df5c318107f",
    "0x477a43755c395ebc06ac955766bbe802004602c084ffdd0e5e94ff520142d43",
    "0x38d4fa47685f81b68003cea49e836861a7ea4a63586d2b6757be15a362b9e3f",
    "0x639db31367c9b963a52d386cdfde4e93d674a3a5a9e4f24071cd9870112fc14",
    "0x37cb29fd6477b46866bbb838a3547d90e890881c3e24a83286c03239a3071f0",
    "0x6c060610fa0c67fcded8c19bafb693945b948fc875ce7621fb2a6b598cde7e5",
    "0x23aa9f31fae639bf0644d9c7f4fcf0d6303763e538a25a167531f70e93cec50",
    "0x56655709c14a4746a58de5745138701b0471dd8848eb60092362983296c4977",
    "0x247ff957bc24c26639e3098166338c4901e89e866bc82c5a5347b4b974d1ab1",
    "0x50d38bb080c38722cc3291bca23b789e82ec01e3bba9083c63bd1116ec1fcab",
    "0x2745cd5e92aa47245ae1cdf6d93020181e340701f887fa2af4ef1420a373c46",
    "0x61bf9671ae3d7f811241802ab1ec4cab48dc18259c1537762e7c8727f3607a5",
    "0x54cd8aef42e41596b96667262ec1f7f2bd5d779c998f343843e5e368758969c",
    "0xafda685909cbb95e99dce37d8fd59ac222d3f0aff3e8b23ce30e523255c80b",
    "0x3f1f8a3a19407808c4abb6fc1fbaa40c5606fecd57740da92dadb4ff3585366",
    "0x3c455b8315b2193d492cd7b602a38e711f996e3681ca1d29a80867b53b49d8b",
    "0x30785b6eb4b26d66862c947385f29a62a3c5cba6fa0871c0fccd8c5662a9593",
    "0x37af8afd15e516cf09f291587a29de7cc955f80bbcc11dc6e48a02dd49756ea",
    "0x567312152887c81301e3c4a789d7a2cd0bc128a270f62410d706fc67c4c4cf5",
    "0x17c28e94f6fed7c7ad06fbc5e58e7ed45bfcaa64d6f437cf907fc05765bf5c0",
    "0x337629222d63f6bb7855f57ca6947efbf586cd8a216e79e24dbbac350dc47c8",
    "0x6724110997ff954bd0aa70ea4d705a96b34def12f63057b07a0e843e8f5db38",
    "0x5fe567d1b028686059c9e61de051919d998870781e82d13ff47cba051613c7a",
    "0x343e6009b4885418f99fec23867045771ad2e0344db4e34e8d6dc30f648eb3c",
    "0x4a25c02f017067d34fb912d5110189727d013efc23addf5afd879ada00d517b",
    "0x6b2929df0a2fe1a7588afb20d7111fc2d8a10167b4ecf0a1de9f5ddf371bfd7",
    "0x5f4483784ac58208082c0fec9cb199f2b7655025285342223d24d4f9721135b",
    "0xb8ec66771d0346b595615e31b4ecf247778351bc8b0b443c9bd887f2538c39",
    "0x76106c0e0db026825e74dec1b89c2d5012ae592bc1883dbea227a0c3f06c68f",
    "0x183b5f2e16fb5a339e8ed191c690926b860b89516d756673760bb63e97cbcc5",
    "0x46edbbbfced10a9111d5109d403e0d2a7eb69b3718f441d97fe7d40d4301f27",
    "0x65bd7979cf4c4758d5458c47fa0f65af4cacacad39467a037a610ddfb0db579",
    "0x5972219ffffc2d18e176c818cfb2a31323356473515644ca328994c9516849",
    "0x3323e324563028cde244cb58d01d8456caca5653636569e19b0e499cb0ef769",
    "0x162a749a5a5662c6df69b0c81242cf27bc55df0622aab292bb5b80d6342ba4b",
    "0x48ade57b4d07dfe92125aa5b680a17f5bec402e1da0e880d3afe6537e5b0092",
    "0x1bf69618788b072d29ff3439cb5c800a9e36fd453feae4098a46112d96df936",
    "0x6c31f8ce89d5c8320e31017bf9a16bff4e40ee9d7c3a02f8c978449f578efc3",
    "0x1dc5d9798692869ad4612fbae5d28aa93f7665755828a840ab8e968646651bc",
    "0x5fb5fc52e128b1f2c8d81c59dd22a0fb725ac37b8de860e5a2f64a3957fe0ab",
    "0x42c6d49f5bfa8f181223de55541f0a041f15028250bf82603e48028ea52ca70",
    "0xaaa339517ebbb7f6327144f673e3fcee23227ef27b53a5cdad40f431bc7869",
    "0x11374315bcd85f47a363f6678e3813621fdd00bbbac5b4207172337d6959be1",
    "0x5e46d99703b99ace3266e979a62be1fce9cc8bd18490eafa39711d7b59be73e",
    "0x4fca2a2507c5be8dc7b0159c8d5e6bb39e6ed054a7d9fc6f6c2be75f0837a1d",
    "0x542d758cfe750b05957db7a7a457da24071ad8d878d458d3201152a12510fe0",
    "0x2086e705c69d654403076efeba8bf38549c14445e0e571acc2b22ffe5c69ac4",
    "0x78920a1bcf289a305369569bac0b11a7fd6c064bdfe677401c5162592e70c4c",
    "0x414051123425efa9f182d41d822d0031327b95e5dfcaf39dd96e890403e018b",
    "0x709f27b4cf78f1ca6ebed94ff7faf5bc8c5c3e09b93a9e0893b661fb5e650f4",
    "0x2f0a8b9633d6d5495df7b726ca39b85581cd09d1d528c8eace4e27e1008af9c",
    "0x63273b73e79fcc8af1c6e63a7fbfc3eacdb472d57e174cdb5df71cd7661e21c",
    "0x228fb8cf7c3e83ab6d0532123db12787713637ee9c36e795433df8c0b0f79c2",
    "0x215926ddc4ff0f97f19d96fcc003d05d8f04a241065233fe9d0a7cf09f3828a"};

  static const std::string mds_matrix_4[] = {"0x5", "0x7", "0x1", "0x3", "0x4", "0x6", "0x1", "0x1",
                                             "0x1", "0x3", "0x5", "0x7", "0x1", "0x1", "0x4", "0x6"};

  static const std::string partial_matrix_diagonal_4[] = {
    "0x40c07e7bbd39b86fcae7e7523bc39fddaa886a6ef6e72580fd941aa08ab37dd",
    "0x6db3ee78e607dc8f1f737405768c6a2ec0923070b1741cd6a36ffbfa900ab3d",
    "0x7ea30c9d3115ea2571b6d0907ef784de7f2ddfdebc427dc871bd36a707403ed",
    "0x7c3a59d4e85b2e64147d33e35156d7cea9e08a3124acc8dc9b8d2deb9ed7216"};

  int full_rounds_8 = 8;
  int half_full_rounds_8 = 4;
  int partial_rounds_8 = 84;
  int alpha_8 = 3;

  static const std::string rounds_constants_8[] = {
    "0x1dc1b64cf421dced51ff26fc864b0030ca0c190f95bfb32baf8e96634cd0b06",
    "0x67f5774f3a4bef2500c250992e1f75692676391ff561f05dcec031ae9058efe",
    "0xe37a5ea09c1fdff416e0ba2e74e9142f695b281a7ad12b6d2cfe605972103b",
    "0x2a26d3815a899d294341a81ea81be327bbfa0a718512b47c6f52d00b25df30",
    "0x369e038ec1c2a5dccf7fb1022110551a21f9a96644a7b06b456bffa61b9578b",
    "0x2a660a8b1eac3466fb17525d42cff5a42f77714e68d43cc38ec1b6ea794cced",
    "0x420ec1546964e58c410560bbd1074f5b6691dc9eb00680492cd9b6a8dc1a86c",
    "0x547647f34378b5b42a57df08fa5d959426f3c9a6bec1c7bd9e6ade8414814ce",
    "0x238546938553fb2e75783d4362c8f8a2360efafa94867daa93a607194313394",
    "0x175e440f41ce2dc9c031ec35e7099c71e2bc4ccf350a98c8594b39f4a2ea217",
    "0x5a21109825acc58e4f6586b10e3cbc67b47f000bda60b4b146cd2402b74f98f",
    "0x16ade3aadb7be24a8ed7370678f38c0af03ef5b7787e764b96b5eaf7cf3d18e",
    "0x65db07fc98595c39be9fd0c588651a06f07007aa8091ae3441a640a3345088b",
    "0x79299c59e40ebd9f09adf271dafe405d93416703d8d5e0a7754407fc1a522c8",
    "0x18c322380912c0b08d0a80c0ac1627656f562cf5044bacdfcc955551c7e1aa3",
    "0xb942e84022e1279984565b4dd6dadcf7183464cfe1ae56c01b7637246f508b",
    "0x671cb1b08341c4acccb429e8ad3c87d9d56da3a55a8889942fb0962904fee17",
    "0x66be6353fcc3f1c839844491238b83cf08f8b86af85b1fe28f0b72c74c18e7a",
    "0x12fa56b5aa36f3c60f6a1601facef87d402b912cce05368e035cee532fbcf4d",
    "0x5f200e942087fe4d99b74f2669774fae02b8b2e2dbe273c279cb63c1de3a8be",
    "0x5a3bab97cc9535313ec85520e3046561c50c4588f993a65e3757f0e50041b92",
    "0x538d85f1cecb88867bd31a4ee69dbf011e4fb9634c03707e80e024584f6ded8",
    "0x23eb9fc9f188395e54597652ace1ce16c996427a68cc1bb25d62cb63a582cf7",
    "0x3436ad14e88d93db8e11a44ebbdc419d88362ee0886fd7a33c3c5db30606aea",
    "0x42377204e23a3a2742f703fec4455e88688ec55c6c6e1183ba1c8ac5f1caa34",
    "0x27926b72ec39c22c5d85c4d68f243883b99ea1cf0609dc1d4af88681e8d125e",
    "0x36d1dcba1c367120152c3ac81fb983fbbfd41382c3ee67132fa9f3da6cfb66a",
    "0x45d157aa5e1c2058403309185ba61884255e8a4110502bc7b6d62978977944",
    "0x73b2b6cac7201a6878d14996703f551fd0e491e5bd299f8d25d52e1e2874800",
    "0x78ea702523d066eb77e0d89be25f06b86a4ac1da42bcbb4da211ee2b52def18",
    "0x1054cae64b975a6f3aad9f4c62d2f2d3985673f3aee31bc181ece265c3e7825",
    "0x45212df41ee81350c9eb7e555975fe898e346c69bbc12e0ad1f231a639f7dc4",
    "0x7d13bb0d431b252d142d02fb8125c764cb95ed3b66175f8ff606ee28fe8bb9e",
    "0x770b4f5ca8f1f4015aa7872100ed7dcb75f3738ad7c81cb61bfc69d1a9c0823",
    "0x31e3809ab7c9b684fb452e6ef9079d659e20685b5129994679d8e51da1b1a68",
    "0x727ad1c2130ed1bba0158a6b04b07faf80d64146ac828710e9a951e350dba6",
    "0x1b415f267b1bca46e755e6011197adc42e3c558cfffd16f6517beb88e881397",
    "0x435bdadddba7d9a75fa223d16785ebc613840c0be181341a0da28fd6bb06afb",
    "0x1b63273a2fe917ec496fcaebf59fe08af6f4595b6b4745631d73083ae51ca3b",
    "0x66b261ff1d490fc0a0b2d4f69585e33ef966182e6a6b1bf681c57862ab27ed5",
    "0x1df5bd89bbfad687ed767ee34d49dd56d29f198749dbaf2f1c17869916dba27",
    "0x6067a2abd3daa6fff26a7ce80b527cea2c97cd100971cfce5976298fe695a4a",
    "0x748106a445f3382a9e85aee615b308b3c15653a6f3777802c458817e0c27db8",
    "0x65145809521313c2656b3017281c246e814fa08d4782834900adbb292b9618a",
    "0x7a3c9bc64576572aafd23213bf04fb07e4b87e4f5d0d65c8be438c31540a7f6",
    "0x728a59c923362a9e6fb0fa9e59f155ce2774e94d6ba3f7b5e3f8ae560a884a5",
    "0xaceb902a596b2f37965292b3bb6a3a9c49a79f3feca40804a649f493c75f9a",
    "0x6045b97db08ddd7d2201471f3c67f9b090049634a185d13f487ab458bbe8d07",
    "0x2da31f067adcd1fd88a8d0066f45978c6830628b79d6a4494b6dfb302cec555",
    "0x4fdadfefe820945fed237faf6d63f600a31f5fe76117c804d35135acb700ae3",
    "0x1198cafc274e5fc504a90430974031b234a753e28c0fa3c5137de8cfc11eab6",
    "0x3ea656106fa1eba6e811570c7b57c81042cc8ef67bf4c1a70794fc7308f1de7",
    "0x78637973d037ea2744c0af32fe1fe7449fa5107dabf20725abb2e5b91d30ca5",
    "0x4df4b2c1475c04a1adfcf38060880aa80eb4cc16beac730d57e2824856925e",
    "0x7e7fe4f54d69df0e8514964d5a2bcc4c216146fa892fd6b8ab4e03839cafab9",
    "0x59d4f7671e8dd6840bcceba26d0665603005e6356db06f59eec3bb3c89c96a",
    "0x3f304ca46a7f5415b164c9bc94878d26f0923641355ae7a07efc5a9f66c76b8",
    "0x4d1f91e360a2ac75278cc8a0cf8b8e07fd0a568a7e756f651b52f769475bf85",
    "0x7efe8ee65f8b4730716b7a0fa7b2066eb9af9ea98dd12b5f56637a5f073befb",
    "0x2ec653a36f6cc74cceba2f7733bc4a84c0ffaf0afbe4f3b61568d97fbce327e",
    "0x496c4158f94c51e02c532ce1403f600612a2ddb6c2019ec4cd2b1e14147ec56",
    "0x735017e7df1d60ce4ab1d565c19c0ff0259b0567c6fab81c67f879871e7f330",
    "0x799b6a8b60191aff54dbaa4d830ce2cd6293cfad13addd01be6b1f3276ea758",
    "0x1b4aeba51045e0c3cea7501f82c36b53be7c3f1084ec5df68f389de68055ef1",
    "0x70d2a624d2ed94cfab065697ff0860dfc455029debf748ec4cafd65fa60977a",
    "0x68a09c859ba26fa25b9d05b62df6446487c7d0225f08d702db78c4539d5f820",
    "0x4615ad3bde830e21fa37f95a9f22484d0b1f3a473aa8e4e10e47728b73d6e9d",
    "0x70fc7fa52fd9e8e941e005a7a869a3085151c568fadd8c5cd386ef4b88ae22a",
    "0x91964f379d56c0188868c6b67b9d3e94c340009e6d28e8c870e0c61a36b3f4",
    "0x357df0815dceecf9368e7c19e9c021e8f7af6be41be5e3a66e0e65182af4d6b",
    "0x46ac7146ab68332bf2ab8e6f884ba60c7962a4db6a9d00603d61fa087fc4a78",
    "0x15d4ae46d156b32937364cf349aa0725a40feba408ec1b1113ddba5a644622",
    "0x6aead9862822a712a47bfe47d82ac1f3ce3bb266a9a765900ed58e263d68282",
    "0x33e85f827f791ad324ed1437011866dc29ee64999cdfe13f836f204f199300",
    "0x2c7c67760cd8ce3c0a0582e808acccda386dfce99dfcc609c2cf14eae79fa9",
    "0x6c1a7e8c78846e4b084d3d15134407508d7f7ee1932a5b991569731fa2b92f6",
    "0x4ef901fc6049a379b2b6dec74e94b7f174249e213d20dbebd2b918168a11a9f",
    "0x6e403c26f54ea179578ba3d43283049e8a97cd45bed41996b6f297124ff5c1d",
    "0x2a3602932c8509c61b5b1305ba08844eaa012796d59d67fe8b9e6181a00cc32",
    "0x111ec0aaff8cec77d1cde861af841e208a9347194457a7a921ec5bec216d14c",
    "0x73b4d9fa1cb6b21a91a5ab71d126ac423a14e7d4376669b3032c455d3512d15",
    "0x527a133541df13604aad50302347f140a8cb79961ab8dd6ae2751815ff3c732",
    "0xaf242af3e0d089bc0f8db4889e7553c6455273d65695ceb74b4240172c46f2",
    "0x5830bf5f04afdc52de5a252b88fcc811ec72806e2a27901d073feedcc2cf3c1",
    "0x7424d997ab9b63c6cdea6fef723647eb870ef8940c5f26f46253cc06b68c139",
    "0x446886c11ff303c299c68d14c1f2840be1077d94f5f63d5c687cb3ea3e4bbbf",
    "0x631a09086fe684db052cda0555e31705277edc5e1d2a68e969b27f81ee285a8",
    "0x26889f5ab4f2c2cafaebab554e514ffb75ef1a2c18bf54aca68d04e1619ebd6",
    "0x7929f41feea5174fe06b989d8301fb5d484e99bf30ff120ff09cf9c8228fd4a",
    "0x2be5044f968788cde988633416ea115160e3aaa8399fe3f4bd37f46f9708e4c",
    "0xf17d0523891c7a7c620a1a49e3b4b909aac8062f1d1c1e0f57161cbca78b02",
    "0x786efed5df1fc4c9fefe186a03370248d093ab2d664f1c4d580544ac193d006",
    "0x6f373e69c7490462f53d3485d64bf27e587d773056f51dbc7382f8a85d61998",
    "0x1cea0e2294a6e533485c60efad70c94e2c3c8927f1d6cbe7f6c25f507fc114e",
    "0x1a8c70aaf9aa249cf6f193d6b45baa8ab9fc69997b5c0c6f0a4485ced0bf34a",
    "0x178e3b45dc4d2603c3221121499b6968c5c5f089f42e599a0523dcb9666ac85",
    "0xd1915ebd1aad0a86e8b4007f7239882c3cc314b3e044d38c6c4b3267dd6e67",
    "0x7ca5dae4800695bd797bb97b384492dd2d0cd5e15d4b9fe6e1d8ee80a08b753",
    "0x6b6082f77d4e9672768dd60fff6d267f561478407dd346ec50f1934dc37d88a",
    "0x49aa3c242ac10b2cc4d3d14a63e58e891e112a5a4f817df348c52e8240b9cae",
    "0x268e51cbe3d348e1646cc459cac6ae63be4f64f3028387932df65141377283c",
    "0x1a7225429d1706d4b5ec4919a5d7387eb51216d159ef6594b0887b020be7893",
    "0x13a0dfb7f10907e4222393f20753d04b371584ae194cc8c46da771ba17fb5b9",
    "0x6b1d3097f50ac809a0d42bcf2cb92d69681ebdbbdc20132634dd0cf2d040fb9",
    "0x56d79cc5d6c2b9a95543f17517ed6eb232ce288b32741f403e4acf1aeefe134",
    "0x204aeb4a69ef10391876202e83352c18d16f0b17282c0a5b850858eac0ce3dc",
    "0x540855a80d3f0c03a12bf57e08d2c11ee78bdaaa56500d9f997666ccead78a2",
    "0x216d99f8c632ac1e0cbe6b972962fa12d649276cb41ca71658c18eca8eb70c3",
    "0x333d2eff383822915a246ccd931180d1cee6357eb88a903133f102df79f79c3",
    "0x67fdec9f13245cfa25b5dfa3d1f2707472c66383014d036fcbd4c2dcb351375",
    "0x36deec64f5af15a8a303e2866fa8e247b7cee6051774baa2abfa65346e42ad7",
    "0x338fbb3d25c08562336bcfcfd5aacb16df094575d914b8b9b434dee33344bba",
    "0x5e80a38ec290edc82ac034f7c4a54d8b54574305c99f33ea84c274948c48bcd",
    "0x32e6fe232bd548d72e154eb3ae082fdd03e7ea6370bc45c94bf04d55c1b8bc3",
    "0x550d7139cef8aa52db0e466c5f0701a9ca4511bf234824f891bc7096c18e355",
    "0xc747bb140fe98d97cb8b04df92df18bd178036e10bc631219b466b8e94420e",
    "0x598c37acbdb9fb7655682efa60281accd5dd45db03cb2c99cfe0b535f5467e3",
    "0x335c3a0be4056462d645cc5b009524b37d4058a0b2d1a26c1c471098c95419d",
    "0x6d1a3dde9e63c23ef2d84ce4faddf4e524f2ca3b36fd9dd1b0bb520f732363e",
    "0x17e9984cb5dad2ec8a6bdc79590a5ba49bc9fe00eb4bf03bab2f4f999e30384",
    "0x4da49e6f7ef55cfbee8ccae70ff40cc7cd41990b15f98c8290cb059701cc25b",
    "0x454fcfdfa7fd68864a35158d8032d98a8543d6461dfe6325a88f2561d9f572f",
    "0x945b09474cd0b1eeef627117e09b1eabc18b9d92897cfa7ec938dff5abe696",
    "0x3c7779fa40ae44a814bf74ee220e646bfa8bb2a1b37fb20866817bd9930fe3",
    "0x7f078819f18bbe8a494784f4d3b79b7681a508e5508f4c7ac626e71d5e8bf40",
    "0x6743b80ddf7a5fe812bc4f17acc5f84f6e8858aec6cc68ff4854e9ecbf79749",
    "0x3779a8c7c1a6ac73e84c86715a939e350696de9f3718b8c93cbca66970bd5fe",
    "0x502d3c3473bd8e7d688051f386dee6d9a3ef64faff2c58fc63dd0fe4b892d8d",
    "0x1228692e214cbf7c58fb265a52a0090c8b94679fab9eafe1a76d2bea3a81ac8",
    "0x6f4aed19a089339d7c32bcbbc3997ccbbe57a6c4caf2d0eae6a14329625e696",
    "0x112d98ef8b3bdbb0ade40f9c20cf1e950573a3ee786311c452dc73b7ba6e034",
    "0x655b897c83df406644b61ef9a5ceef9ea8abba78cc082688cc821c39156e669",
    "0x5d4cd0079837a70ca9d9bed73f688d77869ae4fc04c8ae48e73a43c3aefa051",
    "0x7aced74ea16340e0353df999e84280f6a5066a3dd56913909a01d8ad79d18e6",
    "0x324da88f76c46bf96d54f1323b0f471788ef1679fefef4a29cfe8c8ed061e29",
    "0x13adf50cd5381f068850e34a7ea2cc527fc6e62daa182efa305be2e2cba93fa",
    "0xda8d6039f00b389f9664d7516dfb6c1062c539d34369a46a430e1c06e2c946",
    "0x500043e7b438c9cdbf0effc0dad8373e0eba1377f05b7b4ceecf53bff9ef963",
    "0x79154aa68d1fbe6dc60ed7180d74243de270588998a4a5750205a10e48f6d4a",
    "0x5c54c8396cabdacb087e3e47919e8ac6af5bda3f0269a1b16180a7b14f1b92a",
    "0x8b169c489fed2e3eff18fe7cfe70e5219e7edd244f1336b297e20b2d2182ad",
    "0x1a90208c8757755b8c803678d5b4196eff0bf201831c572a7e68bd3d4e77f41",
    "0x7ddc9bfff1b2b27a10be018b7fd1846bbf7b794ef2a03b578fbc2e4ca7d6c73",
    "0x10fa23d64d0f34a2236209672eb2301e8fabfad10b200186da86851d9d72747",
    "0x158c239bd20c6791f08f68de66bbb3377b287ba8e3bfa158dc57afd34f02cd9",
    "0x1bf60e0492fd3fc2f7e2713bbb1a5d7249c848762eff5ba41af0120afeaaa2c",
    "0x7f1ec099ba7d10979f4a42929f1fb0b1f839869e6fc4062fe96c9c9359c69e4",
    "0x605bbb407d2116d4097fcc9d246c3b75f8fb5765c7a1453642148c567fc64b0"};

  static const std::string mds_matrix_8[] = {
    "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1",
    "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6",
    "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2",
    "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc"};

  static const std::string partial_matrix_diagonal_8[] = {
    "0x497454d465e135e410d8d4d87eebf9044063e9aa1117404007501e8ce0bde23",
    "0x7f4f3d75ab3aeffdbf3166723e534daa541733620e3ee68929dc651eaf47086",
    "0x4a85139b01a3808e1c7621ecc3cadd4184dbf3f0fbfc0076db62ac98c960667",
    "0x1f190d316147b04fd4fcae4e6805c017fa809726abd5a910b43014b261b5272",
    "0x4c19e5f4d9572b169bdb0345212e23d7e1e62b35bf39451b1ead32bfe6bf135",
    "0x1950706ae9759aa2adc97ae95b4d2cc61a1f3089effcc1ee09976a36f8d335f",
    "0x6403158bda87841ea16e7a271b5acc5c5f36ced8d413b43c53802e638e7d029",
    "0x6f393735a1ee452d20a6ff1168eaaf8941693a39dbe1e8de366b8b4b62f40db"};

  int full_rounds_12 = 0;
  int half_full_rounds_12 = 0;
  int partial_rounds_12 = 0;
  int alpha_12 = 0;
  static const std::string rounds_constants_12[] = {};
  static const std::string mds_matrix_12[] = {};
  static const std::string partial_matrix_diagonal_12[] = {};

  static const std::string partial_matrix_diagonal_m1_12[] = {};

  int full_rounds_16 = 0;
  int half_full_rounds_16 = 0;
  int partial_rounds_16 = 0;
  int alpha_16 = 0;
  static const std::string rounds_constants_16[] = {};
  static const std::string mds_matrix_16[] = {};
  static const std::string partial_matrix_diagonal_16[] = {};

  static const std::string partial_matrix_diagonal_m1_16[] = {};

  int full_rounds_20 = 0;
  int half_full_rounds_20 = 0;
  int partial_rounds_20 = 0;
  int alpha_20 = 0;
  static const std::string rounds_constants_20[] = {};
  static const std::string mds_matrix_20[] = {};
  static const std::string partial_matrix_diagonal_20[] = {};

  static const std::string partial_matrix_diagonal_m1_20[] = {};

  int full_rounds_24 = 0;
  int half_full_rounds_24 = 0;
  int partial_rounds_24 = 0;
  int alpha_24 = 0;
  static const std::string rounds_constants_24[] = {};
  static const std::string mds_matrix_24[] = {};
  static const std::string partial_matrix_diagonal_24[] = {};

  static const std::string partial_matrix_diagonal_m1_24[] = {};

} // namespace poseidon2_constants_stark252
#endif