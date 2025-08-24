<?php

function solve()
{

    $input = json_decode(file_get_contents('https://share.shub.edu.vn/api/intern-test/input'), true);
    $token = $input['token'];
    $data = $input['data'];
    $queries = $input['query'];

    $n = count($data);
    $result = [];

    $sum1 = [0];
    $sum2 = [0];

    for ($i = 0; $i < $n; $i++) {
        $sum1[] = $sum1[$i] + $data[$i];
        $sum2[] = $sum2[$i] + ($i % 2 == 0 ? $data[$i] : -$data[$i]);
    }

    foreach ($queries as $q) {
        $l = $q['range'][0];
        $r = $q['range'][1];
        if ($q['type'] == 1) {
            $result[] = $sum1[$r + 1] - $sum1[$l];
        } else {
            $result[] = $sum2[$r + 1] - $sum2[$l] * ($l % 2 == 0 ? 1 : -1);
        }
    }

    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/json\r\nAuthorization: Bearer $token\r\n",
            'content' => json_encode([
                $result
            ])
        ]
    ]);

    return file_get_contents('https://share.shub.edu.vn/api/intern-test/output', false, $context);
}

echo solve();
