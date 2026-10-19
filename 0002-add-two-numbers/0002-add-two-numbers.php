class Solution {
    function addTwoNumbers($l1, $l2) {
    
        $result = new ListNode(0);
        $current = $result;

        $carry = 0;

        $sum = 0;

        while($l1 != null || $l2 != null || $carry > 0 ){

            $dig1 = $l1?->val ?? 0;
            $dig2 = $l2?->val ?? 0;
 
            $sum = $dig1 +  $dig2 + $carry;

            $carry = intdiv($sum, 10);
            $current->next = new ListNode($sum % 10);
            
            $current = $current->next;

            $l1 = $l1?->next;
            $l2 = $l2?->next;
        } 

        return $result->next;
    }
}